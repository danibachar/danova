# Feature Architecture Rule

## Overview
This rule defines the standard architecture pattern for building React features in this application. Follow this pattern for all new features to ensure consistency, maintainability, and reusability.

## Folder Structure
```
src/components/{feature-name}/
├── {FeatureName}Page.tsx          # Main page component
├── constants.ts                   # All strings, numbers, and configuration
├── types.ts                      # UI models and utility functions
├── selectors.ts                  # Redux selectors with computed properties
├── index.ts                      # Central exports
├── styles/
│   └── {feature-name}.css       # Feature-specific CSS
└── components/
    ├── {FeatureName}Header.tsx   # Header component
    ├── {FeatureName}Overview.tsx # Overview/summary component
    ├── DataTable.tsx            # Generic reusable table (if needed)
    ├── {FeatureName}Table.tsx   # Feature-specific table component
    └── StateComponents.tsx      # Loading, Error, Empty, AccessDenied states
```

## Core Principles

### 1. Component Architecture
- **Single Responsibility**: Each component has one clear purpose
- **Reusability**: Create generic components (like DataTable) that can be reused
- **Composition**: Build complex UIs by composing smaller components
- **Props Interface**: Define clear, typed interfaces for all component props

### 2. State Management
- **Redux Selectors**: Move all calculations and data transformations to Redux selectors
- **Computed Properties**: Pre-calculate formatted values, totals, and derived data
- **Memoization**: Use createSelector for performance optimization
- **No Logic in UI**: UI components should only render, not calculate

### 3. Constants & Configuration
- **Centralized Constants**: All magic numbers, strings, and configuration in constants.ts
- **Semantic Naming**: Use descriptive names for all constants
- **Grouped by Purpose**: Organize constants by functionality (LAYOUT, SPACING, TEXT, etc.)
- **Type Safety**: Use `as const` for immutable arrays and objects

### 4. UI Models
- **Data Transformation**: Create UI models that include both raw data and formatted display values
- **Type Safety**: Define comprehensive TypeScript interfaces for all data structures
- **Utility Functions**: Create helper functions to transform raw data to UI models
- **Generic Patterns**: Use generic types for reusable patterns (like TableSummaryModel)

### 5. Styling
- **CSS Classes**: Use semantic CSS class names with feature prefix
- **No Inline Styles**: Avoid inline styles except for dynamic values
- **Color Consistency**: Use the existing color palette from utils/styles.ts
- **Responsive Design**: Consider mobile-first approach
- **CSS Variables**: Avoid CSS custom properties unless properly defined

## Implementation Guidelines

### Constants File Structure
```typescript
// Layout constants
export const LAYOUT = {
  HEADER_HEIGHT: '80px',
  MAX_WIDTH: '1200px',
  BORDER_RADIUS: '6px',
} as const;

// Spacing constants
export const SPACING = {
  XS: '0.25rem',
  SM: '0.5rem',
  MD: '1rem',
  LG: '1.5rem',
  XL: '2rem',
} as const;

// Text content
export const TEXT = {
  PAGE_TITLE: 'Feature Title',
  WELCOME_MESSAGE: 'Welcome back, {username}!',
  // ... more text constants
} as const;

// Table headers (if applicable)
export const TABLE_HEADERS = {
  MAIN_TABLE: [
    'Column 1',
    'Column 2',
    'Column 3',
  ] as string[],
} as const;
```

### UI Models Pattern
```typescript
// Base UI model interface
export interface BaseUIModel {
  id: string;
  // common properties
}

// Feature-specific UI model
export interface FeatureRowModel extends BaseUIModel {
  // raw data properties
  rawValue: number;
  // formatted display properties
  formattedValue: string;
  // computed properties
  totalValue: number;
  formattedTotalValue: string;
}

// Utility function to create UI models
export const createFeatureRowModel = (data: RawDataType, index: number): FeatureRowModel => {
  return {
    id: `${data.id}-${index}`,
    rawValue: data.value,
    formattedValue: `$${data.value.toFixed(2)}`,
    totalValue: data.value * data.quantity,
    formattedTotalValue: `$${(data.value * data.quantity).toFixed(2)}`,
  };
};
```

### Redux Selectors Pattern
```typescript
// Base selectors
export const selectFeatureState = (state: RootState) => state.feature;

// Computed selectors with memoization
export const selectFeatureOverview = createSelector(
  [selectFeatureState],
  (feature): FeatureOverviewModel => {
    // All calculations here
    const totalValue = feature.items.reduce((sum, item) => sum + item.value, 0);
    
    return {
      totalValue,
      formattedTotalValue: `$${totalValue.toFixed(2)}`,
      // ... other computed properties
    };
  }
);

// Row model selectors
export const selectFeatureRowModels = createSelector(
  [selectFeatureState],
  (feature): FeatureRowModel[] => {
    return feature.items.map((item, index) => 
      createFeatureRowModel(item, index)
    );
  }
);
```

### Component Structure Pattern
```typescript
// Main page component
const FeaturePage: React.FC = () => {
  // Selectors
  const featureState = useSelector(selectFeatureState);
  const overview = useSelector(selectFeatureOverview);
  const rowModels = useSelector(selectFeatureRowModels);
  
  // Event handlers
  const handleRetry = () => {
    // retry logic
  };
  
  // Conditional rendering based on state
  if (!isAuthenticated) {
    return <AccessDenied state={accessDeniedState} />;
  }
  
  return (
    <div className="feature-container">
      <FeatureHeader onMenuClick={() => setIsMenuOpen(true)} />
      
      <main className="feature-main">
        <div className="feature-page-header">
          <h1 className="feature-title">{TEXT.PAGE_TITLE}</h1>
          <p className="feature-subtitle">
            {TEXT.WELCOME_MESSAGE.replace('{username}', username || 'User')}
          </p>
        </div>
        
        <FeatureOverview overview={overview} />
        
        {featureState.loading ? (
          <LoadingState state={loadingState} />
        ) : featureState.error ? (
          <ErrorState state={errorState} onRetry={handleRetry} />
        ) : !featureState.hasData ? (
          <EmptyState state={emptyState} />
        ) : (
          <FeatureTable
            rowModels={rowModels}
            summary={summary}
          />
        )}
      </main>
    </div>
  );
};
```

### CSS Class Naming Convention
```css
/* Use feature prefix for all classes */
.feature-container { }
.feature-header { }
.feature-main { }
.feature-page-header { }
.feature-title { }
.feature-subtitle { }
.feature-overview { }
.feature-table-container { }
.feature-table { }
.feature-table-header { }
.feature-table-title { }
.feature-table-summary-row { }
.feature-state-container { }
.feature-button { }
.feature-button-primary { }
.feature-button-secondary { }
```

## State Management Rules

### 1. Loading States
- Use global loading state for the entire feature
- Don't create individual loading states for sub-components
- Show loading spinner with descriptive message

### 2. Error Handling
- Always provide retry functionality for recoverable errors
- Show clear, user-friendly error messages
- Include error state in Redux selectors

### 3. Empty States
- Provide helpful empty state messages
- Include actionable buttons (Connect, View, etc.)
- Guide users on next steps

### 4. Data Flow
- Raw data comes from Redux state
- Transformations happen in selectors
- UI components receive pre-formatted data
- No calculations in render methods

## Testing Considerations

### 1. Component Testing
- Test component rendering with different props
- Test user interactions (clicks, form submissions)
- Test conditional rendering based on state

### 2. Selector Testing
- Test selector calculations with mock data
- Test memoization behavior
- Test edge cases (empty arrays, null values)

### 3. Integration Testing
- Test complete user flows
- Test error scenarios
- Test loading states

## Performance Guidelines

### 1. Memoization
- Use createSelector for expensive calculations
- Memoize component props when appropriate
- Avoid unnecessary re-renders

### 2. Bundle Size
- Import only what you need
- Use dynamic imports for large components
- Minimize dependencies

### 3. CSS Optimization
- Use CSS classes instead of inline styles
- Minimize CSS specificity
- Use efficient selectors

## Common Patterns

### 1. Table with Summary
```typescript
// Always include summary functionality
const renderSummary = (summary: TableSummaryModel) => (
  <tr className="feature-table-summary-row">
    <td><strong>{TEXT.TOTAL}</strong></td>
    <td>{summary.totalCount}</td>
    <td>-</td>
    <td>-</td>
    <td className="feature-table-summary-value">
      <strong>{summary.formattedTotalValue}</strong>
    </td>
  </tr>
);
```

### 2. State Components
```typescript
// Always provide these state components
export const LoadingState: React.FC<{ state: LoadingStateModel }> = ({ state }) => (
  <div className="feature-state-container">
    <div className="feature-state-icon">{state.icon}</div>
    <h2 className="feature-state-title">{state.title}</h2>
    <p className="feature-state-message">{state.message}</p>
  </div>
);
```

### 3. Generic DataTable
```typescript
// Use generic DataTable for tabular data
interface DataTableProps<T> {
  title: string;
  headers: string[];
  data: T[];
  summary?: TableSummaryModel;
  renderRow: (item: T, index: number) => React.ReactNode;
  renderSummary?: (summary: TableSummaryModel) => React.ReactNode;
}
```

## Migration Checklist

When refactoring existing features to follow this pattern:

- [ ] Create folder structure
- [ ] Extract constants to constants.ts
- [ ] Create UI models in types.ts
- [ ] Move calculations to Redux selectors
- [ ] Break down large components into smaller ones
- [ ] Create CSS file with semantic class names
- [ ] Add state components (Loading, Error, Empty)
- [ ] Update main component to use new architecture
- [ ] Test all functionality
- [ ] Run production build to ensure no errors

## Benefits

Following this pattern provides:

1. **Consistency**: All features follow the same structure
2. **Maintainability**: Easy to find and modify code
3. **Reusability**: Components can be shared across features
4. **Performance**: Optimized with memoization and proper state management
5. **Type Safety**: Full TypeScript coverage
6. **Testability**: Clear separation of concerns makes testing easier
7. **Scalability**: Pattern scales well as the application grows

## Examples

See `src/components/portfolio/` for a complete implementation of this pattern.
