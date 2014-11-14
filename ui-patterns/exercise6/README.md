# A few useful UI designs

ngModel normally is used on input fields, select or textarea elements. Here a <div> with html5 contenteditable attribute is changed into a "pseudo" form field (since you can actually enter stuff in that <div>). 

The two-way data binding has to be coded manually. The read function updates the model based on the view's user input. And the $render function is doing the same in the other direction, updating the view for us whenever the model changes.


http://www.mauricechang.com/Angular/angular-playground/ui-patterns/exercise6
