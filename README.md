# The Medal Count Mini App

## Architecture & Implementation Highlights

- **Clean Architecture:** Separated layers (API, UI, hooks, utils).
- **Strong typing:** TypeScript interfaces utilized.
- **Code organization:** Structured for maintainability/scalability.
- **App Router Implementation:** Leverages Next.js App Router.
- **URL Parameter Sorting:** Supports sorting via URL (`?sort=gold`, etc.).
- **Custom Data Hook:** `useMedalData` for efficient data fetching/state.
- **Simulated API Route:** Included for backend data simulation.
- **Efficient Sorted Data Handling:** Effective sorting with tie-breaking rules.
- **Reusable UI Components:** Modular, consistent UI elements.
- **Sortable Header:** Enables column-based sorting.
- **Country Flag Display:** `FlagIcon` component for country flags.
- **Tailwind CSS Styling:** Styled using Tailwind CSS.
- **Comprehensive Error Handling:** Mechanisms for error management.
- **Loading States for UX:** Clear loading indicators.
- **Error Boundary:** Prevents application crashes.
- **Performance Considerations:** Designed with efficiency in mind.
- **Data Caching:** Avoids redundant data fetching.
- **Accessibility:** Built with accessibility in mind (semantic HTML).

## How (Olympic) Medal Count Mini App looks?

- You land here: ![image](https://github.com/user-attachments/assets/585b02e1-5b92-4d5a-a759-5110cfbd14eb) with gold sort defaulted.
- Possible Error look: ![image](https://github.com/user-attachments/assets/7e4f0a93-0394-420b-87fe-a127339a3995)

## Running the Application

1.  **Install dependencies:**
    ```bash
    npm install
    ```
2.  **Run the development server:**
    ```bash
    npm run dev
    ```
3.  **Access the application at:**
    ```
    http://localhost:3000
    ```
4.  **Test different sorting options (URL parameters):**
    ```
    http://localhost:3000/?sort=gold
    http://localhost:3000/?sort=silver
    http://localhost:3000/?sort=bronze
    http://localhost:3000/?sort=total
    ```

## Future Improvements

- **Unit Tests:** Add Jest tests for components/utils.
- **E2E Tests:** Implement Cypress tests for user flow.
- **Internationalization:** Support multiple languages.
- **Responsive Design:** Enhance mobile experience.
- **Advanced Caching Strategy:** Use SWR/React Query for better performance.
- **State Management:** Consider Redux for complex state.
- **Accessibility Enhancements:** Further improvements based on feedback.

## Conclusion

The implementation closely matches UI examples, effectively handles sorting, and displays the top 10 countries by medal count based on the selected criteria.
