# Page features and options

## `header/sidebar`
1. click login/signup, goto `"/login"`
2. if logged in, user icon with select options:
    - click user profile, goto `"/profile/:user-id"`
    - click account settings, goto `"/settings/:user-id"`
    - click logout, rerender current page without logged in options

## `"/"`:
1. click "Click me to see the debate of the day", goto `"/debate/main"`

## `"/login"`
1. POST login form

## `"/profile/:user-id"`
1. show backlog of previously engaged debates with any votes, comments, or material linked 

## `"/debate/main"`
1. click on the debate summation to review debate (and if not voted, vote), goto `"debate/summary`
2. if voted, click on argument summation. goto `"debate/:side/:argument-id"`
3. if voted, click propose/add a new argument, and open a new discussion for that point. When the argument has sufficient engagement, it will show on main feed 

## `"/debate/summary"` 
1. click "I agree" or "I disagree", goto `"debate/main"`
    - based on response, user has access to their side's conversations

## `"debate/:side/:argument-id"`
1. make a comment 
2. link a resource 
3. ??