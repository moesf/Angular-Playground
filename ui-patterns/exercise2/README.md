# A few useful UI designs

## Pagination through Client-Side Data

Table is normally used for data display. 

With data completely on the client-side, use an HTML table element with the ng-repeat directive to render only the items for the current page. Use pagination to go through the data. All the pagination logic should be handled in a custom filter and controller.

http://www.mauricechang.com/Angular/angular-playground/ui-patterns/exercise2