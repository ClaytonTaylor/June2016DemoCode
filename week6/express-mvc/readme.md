# Express MVC

### Objectives
Understand a very common way of organizing and modularizing an `express` application.

## What is MVC?
- architectural pattern for GUI applications
- a means to achieve the `Separation of Concerns`
- Acronym for `Model-View-Controller`

### (M)odels
- structure and storage of data
- are often described by `SCHEMAs`
- often involve data validation and data formatting

### (V)iews
- are the presentation of data
- for SPAs, are handled by `Angular` and `HTML`
- are often implemented via server-side templating (`pug`,`ejs`)

### (C)ontrollers
- are the glue between the model and the view
- are responsible for the logic that pulls data from the model and organizes/passes that data to the view
- used to transform what our data IS to what our user SEES
- updates the model with data changes
- are used on both Client and Server

> Demo a basic data-driven application
