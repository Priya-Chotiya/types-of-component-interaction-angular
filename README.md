# ComponentInteraction
#This project shows you multiple ways of angular component can make interact to eachothers

Question 1.What options do we have to establish such communication?
Answer - 1.Parent to Child: Sharing Data via @Input()
	   2.@ViewChild() allows a one component to be injected into another, giving the parent access to its attributes and functions.
	   3.Child to Parent: Sharing Data via @Output() and EventEmitter
	   4.Sharing Data with a Service Using BehaviorSubject
All above 4 points i added with example in componentA , componentB

Question 2.For each option describe what are the pros and cons of this solution?
-- point 1. @Input() method
-- pros - Easy to share date when there is parent and child scenario
-- cons - After the complete initialization of parent , then only child component use that property from parent 

-- point 2 ViewChild  method
-- pros -  With @ViewChild, we can inject any component or directive (or HTML element) present on the template of a given component onto the component itself.
-- cons -  trying to set the child component properties by yourself isn't reactive and won't trigger Angular's change detection 

-- point 3 @Output() method
-- pros - This approach is ideal when you want to share data changes that occur on things like button clicks, form entires, and other user events.
-- cons - I dont see any cons here.

-- point 4 Sharing Data with a Service Using BehaviorSubject
-- pros - When passing data between components that lack a direct connection, such as siblings, grandchildren, etc, 
we should use a shared service. When you have data that should always be in sync.
-- cons - it's more complex, harder to understand and test

Question 3.For each option describe what are the cases the solution fits best?
-- For me Sharing Data with a Service Using BehaviorSubject is best way to share data beacuse the main thing component are not need to be depend on eachother , 
component are free to get data just simply using subscribe method.
