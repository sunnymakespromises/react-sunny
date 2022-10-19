# react-sunny
React Sunny is a group of components that I re-use in my websites to write more compact code.

## Installation
1. Install the package with **npm** or **yarn**.
`npm install react-sunny`
`yarn add react-sunny`

## Components
### Container
The Container component is a div with flex-box built-in so you dont have to worry about vertical and horizontal centering or any of that nonsense.
#### Props
| name        | type    | default         | options                                                              | description                                                                                                                                                                                                                                                                                              |
|-------------|---------|-----------------|----------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `id`        | string  | empty string    | none                                                                 | The id of the generated div.                                                                                                                                                                                                                                                                             |
| `classes`   | string  | empty string    | none                                                                 | List of classes that apply to the generated div.                                                                                                                                                                                                                                                         |
| `style`     | object  | empty object    | none                                                                 | Any in-line styles to be applied to the generated div.                                                                                                                                                                                                                                                   |
| `direction` | string  | `column`        | `column`, `row`                                                      | The direction of the flex-box.                                                                                                                                                                                                                                                                           |
| `alignment` | string  | `center center` | `center`, `start`, `end`, `around`, `between`, `baseline`, `stretch` | The alignment of the flex-box. The first alignment is on the main axis of the direction property, and the second is on the secondary axis. Must be a space in between the two.                                                                                                                           |
| `position`  | string  | `relative`      | `relative`, `absolute`, `fixed`, `sticky`                            | The position property of the generated div.                                                                                                                                                                                                                                                              |
| `fill`      | string  | `auto`          | `width`, `height`, `parent`, `screen`, `auto`, `none`                | The way in which the div generated wants to fill space.                                                                                                                                                                                                                                                  |
| `padding`   | string  | `all none`      | `all`, `top`, `right`, `bottom`, `left`, user-defined<sup>1</sup>               | The padding property of the div generated. The first word is the position and the second is the size of the padding. Can have up to 4 paddings separated by spaces. Sizes come from user-defined variable names set/overwritten in variables.scss. Must be a space in between the position and the size. |
| `margin`    | string  | `all none`      | `all`, `top`, `right`, `bottom`, `left`, user-defined<sup>1</sup>               | The margin property of the div generated. The first word is the position and the second is the size of the margin. Can have up to 4 margins separated by spaces. Sizes come from user-defined variable names set/overwritten in variables.scss. Must be a space in between the position and the size.    |
| `color`     | string  | empty string    | user-defined<sup>1</sup>                                                        | The background-color property of the div generated. Will take a hex code or a user-defined variable name set/overwritten in variables.scss.                                                                                                                                                              |
| `canClick`  | boolean | `false`         | `true`, `false`                                                      | If the div is clickable, i.e. if pointer-events are turned on or not. Also changes the cursor to pointer.                                                                                                                                                                                                |
| `extras`<sup>2</sup>  | any     | none            | none                                                                 | Any other properties to be passed directly to the generated div, i.e. events or anything else I forgot.                                                                                                                                                                                                  |
| `ref`       | ref     | none            | none                                                                 | A React ref to be passed to the div.                                                                                                                                                                                                                                                                     |

<sup>1</sup> See [User-Defined Variables](#user-defined-variables).
<sup>2</sup> extras is not a prop exactly, you dont pass `extras = { blah }`, but you simply pass the extra properties themselves and it gets captured and passed on directly to the div component. For example, putting `extras = {{ onClick: () => click('test') }}` will not work, but putting `onClick = { () => click('text') }` will pass the onClick property to the div. extras just means any other arguments passed. See example for more.

#### Example
```javascript
<Container classes = 'main-container' fill = 'screen' alignment = 'around center' color = '#F1FAEE'>
    <Container classes = 'box red' fill = 'width' padding = 'all medium' color = '#E63946' canClick ref = {redRef} onClick = { () => click('red') }/>
    <Container classes = 'box light-blue' fill = 'height' padding = 'top small bottom small' color = '#A8DADC' canClick ref = {lightBlueRef}/>
    <Container classes = 'box blue' fill = 'parent' padding = 'top small bottom small' color = '#457B9D' canClick ref = {blueRef} onClick = { () => click('blue') }/>
    <Container classes = 'box dark-blue' style = {{ bottom: 0 }} position = 'absolute' padding = 'all large' color = '#457B9D' ref = {darkBlueRef}/>
</Container>
```


### Dropdown
The Dropdown component- and all of its subcomponents- allows you to abstract away all of the functionality of the dropdown
and focus on the styling alone. Dropdown includes the components Header, List, Option, and Button.
#### Props
| name                  | type     | default | options            | description                                                                                                                                                                                                                                                                                                                                                                                                                           |
|------------------|----------|---------|--------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `behavior`            | string   | none    | `click`, `hover`   | How the `onToggle` function gets triggered.                                                                                                                                                                                                                                                                                                                                                                                           |
| `trigger`             | string   | none    | `button`, `header` | The part of the dropdown that triggers `onToggle`.                                                                                                                                                                                                                                                                                                                                                                                    |
| `onToggle`            | function | none    | none               | The function that gets called when the dropdown gets expanded/closed.                                                                                                                                                                                                                                                                                                                                                                 |
| `onSelect`            | function | none    | none               | The function that gets called when the dropdown option gets clicked.                                                                                                                                                                                                                                                                                                                                                                  |
| `closeOnSelect`       | boolean  | `true`  | `true`, `false`    | Whether or not `onToggle` will trigger when an option gets clicked.                                                                                                                                                                                                                                                                                                                                                                   |
| `closeOnOutsideClick` | boolean  | `true`  | `true`, `false`    | Whether or not `onToggle` will trigger when the user clicks outside of the dropdown.                                                                                                                                                                                                                                                                                                                                                  |
| `container`           | boolean  | `false` | `true`, `false`    | Whether or not the dropdown generates a default [Container](#container) wrapping around the component. If `false`, the component will just render its children. Generally only used when wanting to generate a default [Container](#container), see `extras` for more details.                                                                                                                                                        |
| `extras`<sup>1</sup>             | any      | none    | none               | Any property that you want passed through to a generated wrapper [Container](#container). If any property like `direction`, or `alignment`, etc is given, a [Container](#container) with those properties will be generated as a wrapper. If none is given, then the component will simply render its children, unless `container` is true, in which case it will generate a default [Container](#container) with just default props. |

<sup>1</sup> extras is not a prop exactly, you dont pass `extras = { blah }`, but you simply pass the extra properties themselves and it gets captured and passed on directly to the Container. For example, putting `extras = {{ direction: 'row' }}` will not work, but putting `direction = 'row' fill = 'parent'` will pass the direction and fill properties to the Container. extras just means any other arguments passed.

#### Option
Option is the only Dropdown subcomponent that has a prop other than `container` and `extras`, as it also takes in a `value`,`initial`, and `active` prop. Header, List, and Button all only have `container` and `extras` props, which both have the same behavior as in the Dropdown component.

#### Props
| name      | type    | default | options         | description                                                                                                                                                                  |
|-----------|---------|---------|-----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `value`   | any     | none    | none            | The value to be passed to the `onSelect` function.                                                                                                                           |
| `initial` | boolean | false   | `true`, `false` | Whether this option should be the initial selection for the dropdown. If no `inital` is provided for any of the options in the dropdown then the initial value will be null. |
| `active`  | boolean | true    | `true`, `false` | Whether this option is active, or allowed to be selected. If `false`, `onSelect` will not be called when it is clicked.                                                      |

#### Examples
Dropdown without a dedicated Button, clicking anywhere on the header will trigger `onToggle`.
```javascript
<Dropdown onToggle = { (v) => onToggle(v) } onSelect = { (v) => onSelect(v) } behavior = 'click' trigger = 'header' container>
    <Header direction = 'row' alignment = 'start center' fill = 'width'/>
    <List direction = 'column' alignment = 'start center' fill = 'width'>
        <Option value = 'Apple' container/>
        <Option value = 'Banana' container/>
        <Option value = 'Mango' container/>
    </List>
</Dropdown>
```
Dropdown *with* a dedicated Button, clicking only on the button will trigger `onToggle`.
```javascript
<Dropdown onToggle = { (v) => onToggle(v) } onSelect = { (v) => onSelect(v) } behavior = 'click' trigger = 'button' fill = 'parent'>
    <Header direction = 'row' fill = 'width'>
        <Text size = 'h2'>
            {selection.name}
        </Text>
        <Button style = {{ left: 0 }} position = 'absolute'/>
    </Header>
    <List direction = 'column' alignment = 'start center' fill = 'width'>
        <Option value = 'Apple' container/>
        <Option value = 'Banana' container/>
        <Option value = 'Mango' container/>
    </List>
</Dropdown>
```

### Text
The Text component is just an easier way to work with text and allows you to quickly change styles cleanly with less code.
#### Props
| name        | type    | default      | options                                                | description                                                                                                                                                                                                                                                                                               |
|-------------|---------|--------------|--------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `id`        | string  | empty string | none                                                   | The id of the generated text.                                                                                                                                                                                                                                                                             |
| `classes`   | string  | empty string | none                                                   | List of classes that apply to the generated text.                                                                                                                                                                                                                                                         |
| `style`     | object  | empty object | none                                                   | Any in-line styles to be applied to the generated text.                                                                                                                                                                                                                                                   |
| `color`     | string  | empty string | user-defined<sup>1</sup>                                           | The color property of the generated text.                                                                                                                                                                                                                                                                 |
| `size`      | string  | `p`          | `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `p`                | The size of the generated text.                                                                                                                                                                                                                                                                           |
| `padding`   | string  | `all medium` | `all`, `top`, `right`, `bottom`, `left`, user-defined<sup>1</sup> | The padding property of the generated text. The first word is the position and the second is the size of the padding. Can have up to 4 paddings separated by spaces. Sizes come from user-defined variable names set/overwritten in variables.scss. Must be a space in between the position and the size. |
| `margin`    | string  | `all none`   | `all`, `top`, `right`, `bottom`, `left`, user-defined<sup>1</sup> | The margin property of the generated text. The first word is the position and the second is the size of the margin. Can have up to 4 margins separated by spaces. Sizes come from user-defined variable names set/overwritten in variables.scss. Must be a space in between the position and the size.    |
| `italic`    | boolean | `false`      | `true`, `false`                                        | Whether the text is italicized or not.                                                                                                                                                                                                                                                                    |
| `weight`    | string  | `normal`     | `normal`, `bold`, `light`                              | The font weight of the generated text.                                                                                                                                                                                                                                                                    |
| `alignment` | string  | `center`     | `center`, `left`, `right`, `justify`                   | The alignment of the generated text.                                                                                                                                                                                                                                                                      |
| `href`      | string  | empty string | none                                                   | The `href` attribute of the text, if not empty then the text will be wrapped in an anchor element.                                                                                                                                                                                                        |
| `canClick`  | boolean | `false`      | `true`, `false`                                        | If the div is clickable, i.e. if pointer-events are turned on or not. Also changes the cursor to pointer.                                                                                                                                                                                                 |
| `extras`<sup>2</sup>   | any     | none         | none                                                   | Any other properties to be passed directly to the generated text, i.e. events or anything else I forgot.                                                                                                                                                                                                  |

<sup>1</sup> See [User-Defined Variables](#user-defined-variables).
<sup>2</sup> extras is not a prop exactly, you dont pass `extras = { blah }`, but you simply pass the extra properties themselves and it gets captured and passed on directly to the generated text. For example, putting `extras = {{ onClick: () => click(value) }}` will not work, but putting `onClick = { () => click(value) }` will pass the onClick property to the generated text. extras just means any other arguments passed. See example for more.

#### Example
```javascript
<>
    <Text size = 'h1' weight = 'bold'>
        This text is large! AND BOLD!!!
    </Text>
    <Text size = 'h2'>
        This text is large but not THAT large.
    </Text>
    <Text size = 'h3' href = 'https://google.com'>
        This text is a pretty good size. (and you can click it!)
    </Text>
    <Text size = 'h4' italic>
        This text is a pretty small, honestly. (and italic)
    </Text>
    <Text size = 'p'>
        This text is small.
    </Text>
</>
```

### Responsive
The Responsive component, mainly used in SSR projects like Next.js, conditionally renders based on the aspect ratio of the viewport.
#### Props
| name        | type    | default | options         | description                                                                                      |
|-------------|---------|---------|-----------------|--------------------------------------------------------------------------------------------------|
| `portrait`  | boolean | `false` | `true`, `false` | If the component's children should be rendered when the viewport has a `portrait` aspect ratio.  |
| `landscape` | boolean | `false` | `true`, `false` | If the component's children should be rendered when the viewport has a `landscape` aspect ratio. |

#### Example
```javascript
<>
    <Responsive portrait>
        <Text italic>
            This gets shown when the device is in portrait.
        </Text>
    </Responsive>

    <Responsive landscape>
        <Text italic>
            This gets shown when the device is in landscape.
        </Text>
    </Responsive>
</>
```

## Examples
Simple Dropdown Menu using Container, Dropdown, and Text.
```javascript
import React, { useState, useEffect } from 'react'
import { Container, Dropdown, Header, List, Option, Text } from 'react-sunny'

const DropdownExample = () => {
    const [isExpanded, setIsExpanded] = useState(false)
    const onToggle = ( value ) => {
        setIsExpanded(value)
    }

    const [selection, setSelection] = useState(null)
    const onSelect = ( value ) => {
        setSelection(value)
    }
    
    return (
        <Dropdown onToggle = { (v) => onToggle(v) } onSelect = { (v) => onSelect(v) } behavior = 'click' trigger = 'button' alignment = 'start center' style = {{ width: '400px', height: 'auto' }} color = 'base-1'>
            <Header direction = 'row' alignment = 'end center' fill = 'width' color = 'base-2'>
                <Button style = {{ right: '0px' }} fill = 'height' color = 'base-3'/>
            </Header>
            <List classes = {'Dropdown-List' + (isExpanded ? '-Expanded' : '')} direction = 'column' alignment = 'start center' fill = 'parent'  color = 'neutral-1'>
                <Option value = 'Apple' color = 'neutral-2'/>
                <Option value = 'Banana' color = 'neutral-2'/>
                <Option value = 'Mango' color = 'neutral-2'/>
            </List>
        </Dropdown>
    )
}

const Item = ( value ) => {
    return (
        <Option value = {value} fill = 'parent'>
            <Text size = 'h2'>
                {value}
            </Text>
        </Option>
    )
}

export default DropdownExample
```

Responsive component that renders differently depending on the size of the viewport.
```javascript
import React  from 'react'
import { Container, Responsive, Text } from 'react-sunny'

const ResponsiveExample = () => {
    return (
        <>
            <Responsive portrait>
                <Container color = 'base-1'>
                    <Text size = 'h1'>
                        You are on a portrait device.
                    </Text>
                </Container>
            </Responsive>

            <Responsive landscape>
                <Container color = 'base-2'>
                    <Text size = 'h2'>
                        You are on a landscape device.
                    </Text>
                </Container>
            </Responsive>
        </>
    )
}

export default ResponsiveExample
```

## User-Defined Variables


## Dependencies
React Sunny has no dependecies besides React 16+ and Sass.

## License
MIT © https://github.com/sunnymakespromises