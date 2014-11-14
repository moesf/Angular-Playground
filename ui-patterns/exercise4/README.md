# A few useful UI designs

## Pagination Using Infinite Results

Goal: Paginate through server-side data with a "Load More" button, which just keeps
appending more data until no more data is available.

In order to simplify the example, a server-side service is faked by providing an Angular
service implementation for the items, and then use dependency injection to use it in the controller. 

example:
app.factory("serviceName", function() {
	....
})

Some of the codes in exercise 3 are used here with minor modification. Those new items are concatenated to current items once the "Load More" button is clicked.

http://www.mauricechang.com/Angular/angular-playground/ui-patterns/exercise4/
