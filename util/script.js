import { classes } from './classes.js'
function generateOverrides() {
    var string = 
`@import './variables.scss';
`
    classes.map((component) => { 
        const componentName = component.name
        return string += 
        component.categories.map((category) => {
            const categoryName = category.name
            const variableName = componentName + `-` + categoryName + `s`
            return (
`$` + variableName + `: (
` +             Object.keys(category.values).map((value) => {
                    const valueMinusCategory = value.replace(categoryName, '').substring(1)
                    if (categoryName === 'color' || categoryName == 'size') {
                        const target = valueMinusCategory
                        return (
`   '` + category.values[value] + `': map-get($` + categoryName + `s, ` + target + `), //` + target + `
`                       )
                    }
                    else if (categoryName == 'margin' || categoryName == 'padding') {
                        var negative = false
                        var position = `-` + valueMinusCategory.slice(0, valueMinusCategory.indexOf('-'))
                        var property = categoryName
                        if (position === '-all') {
                            position = ''
                        }
                        property += position
                        var target = valueMinusCategory.slice(valueMinusCategory.indexOf('-') + 1, valueMinusCategory.length)
                        if (categoryName == 'margin' && target[0] === '-') {
                            target = target.substring(1)
                            negative = true
                        }
                        return (
`   '` + category.values[value] + `': (` + property + `: ` + (negative ? `-(` : ``) + `map-get($` + categoryName + `s, ` + target + (negative ? `)` : ``) + `)), //` + valueMinusCategory + `
`                       )
                    }
                    else if (categoryName == 'gap') {
                        var direction = valueMinusCategory.slice(0, valueMinusCategory.indexOf('-'))
                        var property = `-` + categoryName
                        if (position === '-all') {
                            position = ''
                        }
                        property = direction + property
                        var target = valueMinusCategory.slice(valueMinusCategory.indexOf('-') + 1, valueMinusCategory.length)
                        return (
`   '` + category.values[value] + `': (` + property + `: ` + `map-get($` + categoryName + `s, ` + target + `)), //` + valueMinusCategory + `
`                       )
                    }}).join('') +
`);

@each $classname, $` + categoryName + `s in $` + variableName + ` {
    .#{$classname} {
` + 
( categoryName === 'color' ?
`       @media (prefers-color-scheme: dark) {
            ` + (componentName === 'container' ? `background-` : ``) + `color: map-get($colors, dark) !important;
        }
        @media (prefers-color-scheme: light) {
            ` + (componentName === 'container' ? `background-` : ``) + `color: map-get($colors, light) !important;
        }`
: categoryName === 'size' ?
`       font-size: $sizes !important;`
:
`       @each $property, $value in $` + categoryName + `s {
            #{$property}: $value;
        }`
) + 
`
    }
}

`)           
        }).join('')
    }).join('')
    copyToClipboard(string)
}

function copyToClipboard(string) {
    navigator.clipboard.writeText(string);
}

window.generateOverrides = generateOverrides;