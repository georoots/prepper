# Contributing to GeoRoots

Thank you for your interest in contributing to GeoRoots! This document provides guidelines for contributing to our standalone HTML applications.

## Project Philosophy

GeoRoots builds **standalone HTML apps** that work completely offline with these core principles:

- **No external dependencies** unless explicitly required
- **Uniform look and feel** across all apps while maintaining independence
- **Purposeful, functional code** without bloat
- **Medium level of commenting** - explain the "why", not the obvious "what"
- **Stability and reliability** are paramount - consider all edge cases

## Design Standards

### Color Scheme
```css
--primary-color: #1b4332;
--secondary-color: #40916c;
--accent-color: #efffef;
--dark-color: #1b4332;
--light-color: #f8f9fa;
```

### Typography
- Font: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`
- Color: `#333`
- Mobile-first responsive design

### UI Principles
- Modern, clean aesthetic
- Consistent spacing and typography
- Accessible and intuitive interface
- Mobile-friendly responsive design

## Code Quality Standards

### General Guidelines
- Write **elegant, non-verbose code** that's easy to understand
- Use **semantic HTML elements**
- Follow **consistent naming conventions**
- **Comment complex logic** and design decisions
- Avoid over-engineering - keep it simple and functional

### JavaScript Standards
- Prefer functional programming patterns
- Handle errors gracefully
- Consider edge cases and unusual situations
- Write self-documenting code with clear variable names

### CSS Standards
- Use CSS custom properties (variables) for consistency
- Mobile-compatible responsive design
- Maintain consistent spacing and typography
- Use semantic class names
- Minimize specificity conflicts

### HTML Standards
- Use semantic HTML5 elements
- Ensure proper accessibility attributes
- Maintain clean, readable structure

## Development Workflow

### Before You Start
1. Check existing issues and pull requests
2. Create an issue to discuss major changes
3. Fork the repository

### Making Changes
1. Create a feature branch: `git checkout -b feature/your-feature-name`
2. Make your changes following the coding standards
3. Test thoroughly across different browsers and devices
4. Ensure the app works offline
5. Update documentation if needed

### Testing Checklist
- [ ] App works completely offline
- [ ] Responsive design on mobile devices
- [ ] Cross-browser compatibility (Chrome, Firefox, Safari, Edge)
- [ ] No console errors
- [ ] All functionality works as expected
- [ ] Performance is acceptable

### Submitting Changes
1. Commit with clear, descriptive messages
2. Push to your fork
3. Create a pull request with:
   - Clear description of changes
   - Screenshots if UI changes
   - Testing notes
   - Any breaking changes

## Internationalization

When adding new text:
1. Add translations for all supported languages. At minimum it should be:
   - English (en)
   - Spanish (es)
   - Portuguese (pt)

2. Use the translation system:
   ```javascript
   // Add to translation data
   "newKey": "English text"
   
   // Use in code
   getText('newKey')
   ```

## Attribution and Licensing

- Always include proper attribution for external data sources
- Follow licensing requirements for third-party content
- Maintain GPLv3 license compliance
- Include source links where appropriate

## Getting Help

- Check existing documentation
- Review similar implementations in other apps
- Create an issue for questions or problems
- Join discussions in existing issues

## Code Review Process

All contributions go through code review:
- Maintainability and readability
- Adherence to project standards
- Performance considerations
- Security implications
- Browser compatibility

## Thank You

Your contributions help make GeoRoots better for everyone. Thank you for your time and effort!

---

*This project is licensed under the GNU General Public License v3.0 - see the LICENSE file for details.*
