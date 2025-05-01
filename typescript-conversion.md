# TypeScript Conversion Tracking

## Files to Convert

### Components
- [ ] `components/Bio.jsx` → `Bio.tsx`
- [ ] `app/components/Layout.jsx` → `Layout.tsx`

### Pages
- [ ] `app/blog/page.jsx` → `page.tsx`
- [ ] `app/about/page.jsx` → `page.tsx`
- [ ] `app/talks/page.jsx` → `page.tsx`
- [ ] `app/papers/page.jsx` → `page.tsx`
- [ ] `app/blog/[slug]/page.jsx` → `page.tsx`
- [x] `app/papers/[slug]/page.jsx` → `page.tsx` (Completed)

## Conversion Steps for Each File

1. Create new `.tsx` file
2. Add proper TypeScript types
3. Convert the component
4. Update imports in other files
5. Remove old `.jsx` file using `git rm`
6. Test the changes
7. Commit changes

## Common Types to Add

- Page Props (for all pages):
```typescript
interface PageProps {
  params?: {
    slug?: string;
  };
  searchParams?: { [key: string]: string | string[] | undefined };
}
```

- Layout Props:
```typescript
interface LayoutProps {
  children: React.ReactNode;
}
```

## Testing Steps

1. Run `npm run dev` to check for compilation errors
2. Visit each converted page to verify functionality
3. Check dark mode
4. Test responsive design
5. Verify all interactive features work

## Notes

- Keep commits atomic (one file conversion per commit)
- Use consistent naming for types
- Add JSDoc comments for complex props
- Update README as needed 