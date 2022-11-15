# :butterfly::sunny: react-sunny :sunny::hatched_chick:
React Sunny is just a group of useful components that I re-use in my websites. It includes the components [Container](#container), [Text](#text), [Dropdown](#dropdown), and [Responsive](#responsive). It may not be the most useful to anybody else but I like it :blush: I really just wanted to see if I could successfully finish a project with proper documentation and publish it to the npm registry :eyes:

## Installation
### 1. Install the package with **npm**.
`npm install react-sunny`
### 2. Use the components in your project!
```javascript
import { Container, Text, Responsive, Dropdown } from 'react-sunny'
```

## Components
### <a name="container"></a>Container :package:
The Container component is a div with flex-box built-in so you dont have to worry about vertical and horizontal centering or any of that nonsense. It also comes with some other style props that you can use to make writing your code just a little bit cleaner :stuck_out_tongue_winking_eye:
#### Props
| name        | type    | default         | options                                                              | description                                                                                                                                                                                                                                                                                      |
|-------------|---------|-----------------|----------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `id`        | string  | empty string    | none                                                                 | The id of the generated div.                                                                                                                                                                                                                                                                     |
| `classes`   | string  | empty string    | none                                                                 | List of classes that apply to the generated div.                                                                                                                                                                                                                                                 |
| `styles`    | object  | empty object    | none                                                                 | Any in-line styles to be applied to the generated div.                                                                                                                                                                                                                                           |
| `width`     | string  | empty string    | any                                                                  | Width of the generated div.                                                                                                                                                                                                                                                                      |
| `height`    | string  | empty string    | any                                                                  | Height of the generated div.                                                                                                                                                                                                                                                                     |
| `direction` | string  | `column`        | `column`, `row`                                                      | The direction of the flex-box.                                                                                                                                                                                                                                                                   |
| `alignment` | string  | `center center` | `center`, `start`, `end`, `around`, `between`, `baseline`, `stretch` | The alignment of the flex-box. The first alignment is on the main axis of the direction property, and the second is on the secondary axis.                                                                                                                                                       |
| `position`  | string  | `relative`      | `relative`, `absolute`, `fixed`, `sticky`                            | The position property of the generated div.                                                                                                                                                                                                                                                      |
| `fill`      | string  | empty string    | `width`, `height`, `parent`, `screen`, `auto`, `none`                | The way in which the div generated wants to fill space.                                                                                                                                                                                                                                          |
| `padding`   | string  | empty string    | `all`, `top`, `right`, `bottom`, `left`, [package variables](#package-variables)               | The padding property of the div generated. The first word is the position and the second is the size of the padding. Can have up to 4 paddings. Sizes can be from [package variables](#package-variables) or regular HTML size values. Size from variables can be negative as well. e.g. "bottom 50% top -medium" |
| `margin`    | string  | empty string    | `all`, `top`, `right`, `bottom`, `left`, [package variables](#package-variables)               | The margin property of the div generated. The first word is the position and the second is the size of the margin. Can have up to 4 margins. Sizes can be from [package variables](#package-variables) or regular HTML size values. Size from variables can be negative as well. e.g. "bottom 50% top -medium"    |
| `color`     | string  | empty string    | [package variables](#package-variables)                                                        | The background-color property of the div generated. Will take a hex code or a [package variable](#package-variables).                                                                                                                                                                                             |
| `canClick`  | boolean | `false`         | `true`, `false`                                                      | If the div is clickable, i.e. if pointer-events are turned on or not. Also changes the cursor to pointer.                                                                                                                                                                                        |
| `extras`<sup>1</sup>   | any     | none            | none                                                                 | Any other properties to be passed directly to the generated div, i.e. events or anything else I forgot.                                                                                                                                                                                          |
| `ref`       | ref     | none            | none                                                                 | A React ref to be passed to the div.                                                                                                                                                                                                                                                             |

<sup>1</sup> extras is not a prop exactly, you dont pass `extras = { blah }`, but you simply pass the extra properties themselves and it gets captured and passed on directly to the div component. For example, putting `extras = {{ onClick: () => click('test') }}` will not work, but putting `onClick = { () => click('text') }` will pass the onClick property to the div. extras just means any other arguments passed. See example for more.

#### Example
```javascript
<Container fill = 'parent' classes = 'rounded-container' alignment = 'around center' color = 'base-2' padding = 'all medium'>
    <Container fill = 'parent' direction = 'row' alignment = 'start center'>
        <Container styles = {{ aspectRatio: '1/1' }} classes = 'rounded-container' fill = 'parent' color = 'red' padding = 'all medium' position = 'relative' canClick onClick = { () => console.log('red') }>
            <Container classes = 'rounded-container' styles = {{ backdropFilter: 'brightness(80%)' }} fill = 'parent' margin = 'all small' position = 'relative' canClick/>
            <Container classes = 'rounded-container' styles = {{ backdropFilter: 'brightness(80%)' }} fill = 'parent' margin = 'all small' position = 'relative' canClick/>
        </Container>
        <Container direction = 'row' styles = {{ aspectRatio: '1/1' }} classes = 'rounded-container' fill = 'parent' color = 'blue' margin = 'left small right small' padding = 'all medium' position = 'relative' canClick onClick = { () => console.log('blue') }>
            <Container classes = 'rounded-container' styles = {{ backdropFilter: 'brightness(80%)' }} fill = 'parent' margin = 'all small' position = 'relative' canClick/>
            <Container classes = 'rounded-container' styles = {{ backdropFilter: 'brightness(80%)' }} fill = 'parent' margin = 'all small' position = 'relative' canClick/>
        </Container>
        <Container styles = {{ aspectRatio: '1/1' }} classes = 'rounded-container' fill = 'parent' padding = 'all medium' position = 'relative'>
            <Container styles = {{ top: 0, left: 0 }} fill = 'parent' position = 'absolute'>
                <Container direction = 'row' classes = 'rounded-container' fill = 'parent' margin = 'bottom x-small' padding = 'all medium' color = 'yellow' position = 'relative' canClick onClick = { () => console.log('yellow') }>
                    <Container classes = 'rounded-container' styles = {{ backdropFilter: 'brightness(80%)' }} fill = 'parent' margin = 'all small' position = 'relative' canClick/>
                    <Container classes = 'rounded-container' styles = {{ backdropFilter: 'brightness(80%)' }} fill = 'parent' margin = 'all small' position = 'relative' canClick/>
                </Container>
                <Container direction = 'row' classes = 'rounded-container' fill = 'parent' margin = 'top x-small' padding = 'all medium' position = 'relative'>
                    <Container direction = 'row' styles = {{ top: 0, left: 0 }} fill = 'parent' position = 'absolute'>
                        <Container direction = 'row' classes = 'rounded-container' fill = 'parent' margin = 'right x-small' padding = 'left x-small right x-small top medium bottom medium' color = 'green' position = 'relative' canClick onClick = { () => console.log('green') }>
                            <Container classes = 'rounded-container' styles = {{ backdropFilter: 'brightness(80%)' }} fill = 'parent' margin = 'all small' position = 'relative' canClick/>
                            <Container classes = 'rounded-container' styles = {{ backdropFilter: 'brightness(80%)' }} fill = 'parent' margin = 'all small' position = 'relative' canClick/>
                        </Container>
                        <Container direction = 'row' classes = 'rounded-container' fill = 'parent' margin = 'left x-small' padding = 'left x-small right x-small top medium bottom medium' color = 'purple' position = 'relative' canClick onClick = { () => console.log('purple') }>
                            <Container classes = 'rounded-container' styles = {{ backdropFilter: 'brightness(80%)' }} fill = 'parent' margin = 'all small' position = 'relative' canClick/>
                            <Container classes = 'rounded-container' styles = {{ backdropFilter: 'brightness(80%)' }} fill = 'parent' margin = 'all small' position = 'relative' canClick/>
                        </Container>
                    </Container>
                </Container>
            </Container>
        </Container>
    </Container>
</Container>
```


<!-- ### <a name="dropdown"></a>Dropdown :point_down:
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
Dropdown without a dedicated Button, hovering anywhere on the header will trigger `onToggle`.
```javascript
<Dropdown onSelect = {setSelection} onToggle = {setIsExpanded} behavior = 'hover' trigger = 'header' classes = 'dropdown' alignment = 'start start' fill = 'width'>
        <Header classes = 'header' padding = 'all medium' color = 'base-2'>
            <Text size = 'p'>{selection.toString()}</Text>
        </Header>
        <List classes = {'list' + (isExpanded ? '-expanded' : '')} alignment = 'start start' position = 'absolute' padding = 'left medium right medium bottom medium' color = 'base-2'>
                <Option classes = 'option' value = 'apple' initial alignment = 'start start' fill = 'parent' padding = 'top small bottom small'>
                    <Text size = 'p'>Apple</Text>
                </Option>
                <Option classes = 'option' value = 'banana' initial alignment = 'start start' fill = 'parent' padding = 'top small bottom small'>
                    <Text size = 'p'>Banana</Text>
                </Option>
                <Option classes = 'option' value = 'mango' initial alignment = 'start start' fill = 'parent' padding = 'top small bottom small'>
                    <Text size = 'p'>Mango</Text>
                </Option>
        </List>
</Dropdown>
```
Dropdown *with* a dedicated Button, clicking only on the button will trigger `onToggle`.
```javascript
<Dropdown onSelect = {setSelection} onToggle = {setIsExpanded} behavior = 'hover' trigger = 'header' classes = 'dropdown' alignment = 'start start' fill = 'width'>
        <Header classes = 'header' direction = 'row' alignment = 'between center' padding = 'all medium' color = 'base-2'>
            <Text size = 'p'>{selection.toString()}</Text>
            <Button width = '20px' height = '20px' color = 'base-3'/>
        </Header>
        <List classes = {'list' + (isExpanded ? '-expanded' : '')} alignment = 'start start' position = 'absolute' padding = 'left medium right medium bottom medium' color = 'base-2'>
                <Option classes = 'option' value = 'apple' initial alignment = 'start start' fill = 'parent' padding = 'top small bottom small'>
                    <Text size = 'p'>Apple</Text>
                </Option>
                <Option classes = 'option' value = 'banana' initial alignment = 'start start' fill = 'parent' padding = 'top small bottom small'>
                    <Text size = 'p'>Banana</Text>
                </Option>
                <Option classes = 'option' value = 'mango' initial alignment = 'start start' fill = 'parent' padding = 'top small bottom small'>
                    <Text size = 'p'>Mango</Text>
                </Option>
        </List>
</Dropdown>
``` -->

### <a name="text"></a>Text :abc:
The Text component is just an easier way to work with text and allows you to quickly change styles cleanly with less code.
#### Props
| name        | type    | default      | options                                                | description                                                                                                                                                                                                                                                                                               |
|-------------|---------|--------------|--------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `id`        | string  | empty string | none                                                   | The id of the generated text.                                                                                                                                                                                                                                                                             |
| `classes`   | string  | empty string | none                                                   | List of classes that apply to the generated text.                                                                                                                                                                                                                                                         |
| `styles`     | object  | empty object | none                                                   | Any in-line styles to be applied to the generated text.                                                                                                                                                                                                                                                   |
| `color`     | string  | empty string | [package variables](#package-variables)                                           | The color property of the generated text. Will take a hex code or a [package variable](#package-variables).                                                                                                                                                                                                                                                |
| `size`      | string  | empty string | `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `p`                | The size of the generated text.                                                                                                                                                                                                                                                                           |
| `padding`   | string  | empty string | `all`, `top`, `right`, `bottom`, `left`, [package variables](#package-variables)               | The padding property of the div generated. The first word is the position and the second is the size of the padding. Can have up to 4 paddings. Sizes can be from [package variables](#package-variables) or regular HTML size values. Size from variables can be negative as well. e.g. "bottom 50% top -medium" |
| `margin`    | string  | empty string | `all`, `top`, `right`, `bottom`, `left`, [package variables](#package-variables)               | The margin property of the div generated. The first word is the position and the second is the size of the margin. Can have up to 4 margins. Sizes can be from [package variables](#package-variables) or regular HTML size values. Size from variables can be negative as well. e.g. "bottom 50% top -medium"    |
| `italic`    | boolean | `false`      | `true`, `false`                                        | Whether the text is italicized or not.                                                                                                                                                                                                                                                                    |
| `underline` | boolean | `false`      | `true`, `false`                                        | Whether the text is underlined or not.                                                                                                                                                                                                                                                                     |
| `weight`    | string  | empty string | `normal`, `bold`, `light`                              | The font weight of the generated text.                                                                                                                                                                                                                                                                    |
| `alignment` | string  | empty string | `center`, `left`, `right`, `justify`                   | The alignment of the generated text.                                                                                                                                                                                                                                                                      |
| `href`      | string  | empty string | none                                                   | The `href` attribute of the text, if not empty then the text will be wrapped in an anchor element.                                                                                                                                                                                                        |
| `canClick`  | boolean | `false`      | `true`, `false`                                        | If the div is clickable, i.e. if pointer-events are turned on or not. Also changes the cursor to pointer.                                                                                                                                                                                                 |
| `extras`<sup>1</sup>   | any     | none         | none                                                   | Any other properties to be passed directly to the generated text, i.e. events or anything else I forgot.                                                                                                                                                                                                  |

<sup>1</sup> extras is not a prop exactly, you dont pass `extras = { blah }`, but you simply pass the extra properties themselves and it gets captured and passed on directly to the generated text. For example, putting `extras = {{ onClick: () => click(value) }}` will not work, but putting `onClick = { () => click(value) }` will pass the onClick property to the generated text. extras just means any other arguments passed. See example for more.

#### Example
```javascript
<Container fill = 'parent' color = 'accent-1'>
    <Text size = 'h1' weight = 'normal'>
        This text is large! but not bold 😭
    </Text>
    <Text size = 'h2' color = 'blue'>
        This text is large but not THAT large. It's also blue.
    </Text>
    <Text size = 'h3' href = 'https://google.com'>
        This text is a pretty good size. (and you can click it!)
    </Text>
    <Text size = 'h4' italic>
        This text is a pretty small, honestly. (and italic)
    </Text>
    <Text size = 'p' underline>
        This text is small, but underlined.
    </Text>
</Container>
```

### <a name="responsive"></a>Responsive :mirror:
The Responsive component, mainly used in SSR projects like Next.js, conditionally renders based on the aspect ratio of the viewport.
#### Props
| name        | type    | default | options         | description                                                                                      |
|-------------|---------|---------|-----------------|--------------------------------------------------------------------------------------------------|
| `portrait`  | boolean | `false` | `true`, `false` | If the component's children should be rendered when the viewport has a `portrait` aspect ratio.  |
| `landscape` | boolean | `false` | `true`, `false` | If the component's children should be rendered when the viewport has a `landscape` aspect ratio. |

#### Hooks
| name          | type    | options         | returns                                                                                             |
|---------------|---------|-----------------|-----------------------------------------------------------------------------------------------------|
| `isPortrait`  | boolean | `true`, `false` | true if viewport is in a `portrait` orientation, false if viewport is in a `landscape` orientation. |
| `isLandscape` | boolean | `true`, `false` | true if viewport is in a `landscape` orientation, false if viewport is in a `portrait` orientation. |

#### Example
```javascript
<Container fill = 'parent'>
    <Responsive portrait>
        <Text size = 'h2' underline color = 'accent-1'>
            This gets shown when the device is in portrait.
        </Text>
    </Responsive>

    <Responsive landscape>
        <Container alignment = 'start start' fill = 'parent'>
            <Text size = 'h2' italic color = 'neutral-1'>
                This gets shown when the device is in landscape.
            </Text>
            <Text size = 'h3' weight = 'normal'>
                This too!
            </Text>
        </Container>
    </Responsive>
</Container>
```

## <a name="package-variables"></a>Package Variables
#### To override the default variables for color, padding, and margin in the package, follow these steps:
1. Locate the  `react-sunny-styles` folder or just download it from [here]('http://github.com/sunnymakespromises/react-sunny-public/tree/main/dist').
2. Copy the folder into your application and import `overrides.scss` into your index/top-level page.
```javascript
import './react-sunny-styles/overrides.scss'
```
3. Change any variables in `variables.scss` and it will override them everywhere.

### Default Package Variable Values
##### Colors
| name       | light       | dark        | editable? |
|------------|-------------|-------------|-----------|
| base-1     | `#FFFFFF`   | `#000000`   | yes       |
| base-2     | `#F2F2F7`   | `#1C1C1E`   | yes       |
| base-3     | `#D1D1D6`   | `#3A3A3C`   | yes       |
| neutral-1  | `#000000`   | `#FFFFFF`   | yes       |
| neutral-2  | `#1D1D1F`   | `#F2F2F7`   | yes       |
| neutral-3  | `#424245`   | `#D1D1D6`   | yes       |
| accent-1   | `#007AFF`   | `#007AFF`   | yes       |
| accent-2   | `#32ADE6`   | `#32ADE6`   | yes       |
| accent-3   | `#55BEF0`   | `#55BEF0`   | yes       |
| tertiary-1 | `#FA3B2F`   | `#FA3B2F`   | yes       |
| tertiary-2 | `#F92B53`   | `#F92B53`   | yes       |
| tertiary-3 | `#FA6A86`   | `#FA6A86`   | yes       |
| clear      | `#00000000` | `#00000000` | no        |
| extra-1    | `#000000`   | `#000000`   | yes       |
| extra-2    | `#000000`   | `#000000`   | yes       |
| extra-3    | `#000000`   | `#000000`   | yes       |
| white      | `#FFFFFF`   | `#FFFFFF`   | no        |
| black      | `#000000`   | `#000000`   | no        |
| gray-1     | `#8E8E93`   | `#8E8E93`   | no        |
| gray-2     | `#AEAEB2`   | `#636366`   | no        |
| gray-3     | `#C7C7CC`   | `#48484A`   | no        |
| gray-4     | `#D1D1D6`   | `#3A3A3C`   | no        |
| gray-5     | `#E5E5EA`   | `#2C2C2E`   | no        |
| gray-6     | `#F2F2F7`   | `#1C1C1E`   | no        |
| red        | `#FA3B2F`   | `#FA3B2F`   | no        |
| orange     | `#FF9500`   | `#FF9500`   | no        |
| yellow     | `#FFCC02`   | `#FFCC02`   | no        |
| green      | `#35C759`   | `#35C759`   | no        |
| blue       | `#007AFF`   | `#007AFF`   | no        |
| purple     | `#5856D5`   | `#5856D5`   | no        |
| pink       | `#FF6482`   | `#FF6482`   | no        |

##### Paddings
| name    | value     |
|---------|-----------|
| none    | `0`       |
| x-small | `0.25rem` |
| small   | `0.5rem`  |
| medium  | `1rem`    |
| large   | `2rem`    |
| x-large | `4rem`    |

##### Margins
| name    | value     |
|---------|-----------|
| none    | `0`       |
| x-small | `0.25rem` |
| small   | `0.5rem`  |
| medium  | `1rem`    |
| large   | `2rem`    |
| x-large | `4rem`    |

##### Text Sizes
| name | value    |
|------|----------|
| h1   | `2em`    |
| h2   | `1.5em`  |
| h3   | `1.17em` |
| h4   | `1em`    |
| h5   | `0.83em` |
| h6   | `0.67em` |
| p    | `1rem`   |

## Dependencies
React Sunny has no dependecies besides React 16+, Sass, and react-responsive.

## License
MIT © https://github.com/sunnymakespromises
