# Bootstrap!
> Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.

* CSS framework
	- Essentially just a bunch of class selectors with pre-defined CSS rules
	- Focused on responsive and mobile-first development

* Lots of components
	- Normalization (standardizes the way some elements look by default)
	- Typography
        - Fonts, sizes, etc.
	- Layout     
        - Grid system
	- Forms
	- Buttons

## Grid System
- You NEED to have these classes in order for the grid to work
	1. .container / .container-fluid
	2. .row
	3. .col-*-* (.col-SCREENSIZE-COLUMNS)

- Column Classes
	.col-xs-8 => on xs screens and up, 8/12 columns
	Screen sizes : xs, sm, md, lg
	columns : 1 - 12

	*** YOU CAN USE MULTIPLE COLUMN CLASSES ON AN ELEMENT!!!  YOU OFTEN WILL! ***

NOT centered by default
Row heights are the height of the TALLEST column
You will be specifying how many columns (how wide) an element takes up

#### 12/12 columns => 100% width
```html
    <div class="col-lg-12"></div>
```
#### 8/12  columns => 75% width
```html
    <div class="col-lg-8"></div>
```
#### 6/12  columns => 50% width
```html
    <div class="col-lg-6"></div>
```
#### 3/12  columns => 25% width
```html
    <div class="col-lg-3"></div>
```

## Classic Setup

```html
	<div class="container">
		<div class="row">
			<div class="col-xs-12 col-md-8 col-lg-6">
                <p>Putting straps on muh' boots.</p>
            </div>
		</div>
	</div>
```
