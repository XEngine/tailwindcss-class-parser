import type {DataType} from "./utils/infer-data-type";

export type Variant = {
    kind: 'arbitrary' | 'named',
    type: 'opacity' | 'media' | 'pseudo' | 'content' | 'form' | 'state' | 'interaction' | 'misc' | 'system'
    value: string
}

export type FunctionalPlugin = {
    scaleKey: string,
    class: string[],
    ns: string,
    type: DataType,
    supportNegative?: boolean
}

export type NamedPlugin = {
    value: string
    class: string[],
    ns: string,
}

export const functionalPlugins = new Map<string, FunctionalPlugin[]>([
    ["w", [
        {scaleKey: "width", ns: 'width', class: ['width'], type: 'length'},
    ]],
    ["min-w", [
        {scaleKey: "minWidth", ns: 'minWidth', class: ['min-width'], type: 'length'},
    ]],
    ["max-w", [
        {scaleKey: "maxWidth", ns: 'maxWidth', class: ['max-width'], type: 'length'},
    ]],
    ["h", [
        {scaleKey: "height", ns: 'height', class: ['height'], type: 'length'},
    ]],
    ["min-h", [
        {scaleKey: "minHeight", ns: 'minHeight', class: ['min-height'], type: 'length'},
    ]],
    ["max-h", [
        {scaleKey: "maxHeight", ns: 'maxHeight', class: ['max-height'], type: 'length'},
    ]],
    ["size", [
        {scaleKey: "size", ns: 'size', class: ['width', 'height'], type: 'length'},
    ]],
    ["m", [
        {scaleKey: "margin", ns: 'margin', class: ['margin'], type: 'length', supportNegative: true},
    ]],
    ["mx", [
        {scaleKey: "margin", ns: 'marginX', class: ['margin-left', 'margin-right'], type: 'length', supportNegative: true},
    ]],
    ["my", [
        {scaleKey: "margin", ns: 'marginY', class: ['margin-top', 'margin-bottom'], type: 'length', supportNegative: true},
    ]],
    ["mt", [
        {scaleKey: "margin", ns: 'marginTop', class: ['margin-top'], type: 'length', supportNegative: true},
    ]],
    ["mr", [
        {scaleKey: "margin", ns: 'marginRight', class: ['margin-right'], type: 'length', supportNegative: true},
    ]],
    ["mb", [
        {scaleKey: "margin", ns: 'marginBottom', class: ['margin-bottom'], type: 'length', supportNegative: true},
    ]],
    ["ml", [
        {scaleKey: "margin", ns: 'marginLeft', class: ['margin-left'], type: 'length', supportNegative: true},
    ]],
    ["p", [
        {scaleKey: "padding", ns: 'padding', class: ['padding'], type: 'length'},
    ]],
    ["px", [
        {scaleKey: "padding", ns: 'paddingX', class: ['padding-left', 'padding-right'], type: 'length'},
    ]],
    ["py", [
        {scaleKey: "padding", ns: 'paddingY', class: ['padding-top', 'padding-bottom'], type: 'length'},
    ]],
    ["pt", [
        {scaleKey: "padding", ns: 'paddingTop', class: ['padding-top'], type: 'length'},
    ]],
    ["pr", [
        {scaleKey: "padding", ns: 'paddingRight', class: ['padding-right'], type: 'length'},
    ]],
    ["pb", [
        {scaleKey: "padding", ns: 'paddingBottom', class: ['padding-bottom'], type: 'length'},
    ]],
    ["pl", [
        {scaleKey: "padding", ns: 'paddingLeft', class: ['padding-left'], type: 'length'},
    ]],
    ["text", [
        {scaleKey: "fontSize", ns: 'fontSize', class: ['font-size'], type: 'length'},
        {scaleKey: "textColor", ns: 'textColor', class: ['color'], type: 'color'},
    ]],
    ["indent", [
        {scaleKey: "textIndent", ns: 'textIndent', class: ['text-indent'], type: 'length', supportNegative: true},
    ]],
    ["underline-offset", [
        {scaleKey: "textUnderlineOffset", ns: 'textUnderlineOffset', class: ['text-underline-offset'], type: 'number'},
    ]],
    ["decoration", [
        {scaleKey: "textDecorationThickness", ns: 'textDecorationThickness', class: ['text-decoration-thickness'], type: 'number'},
        {scaleKey: "textDecorationColor", ns: 'textDecorationColor', class: ['text-decoration-color'], type: 'color'},
    ]],
    ["font", [
        {scaleKey: "fontWeight", ns: 'fontWeight', class: ['font-weight'], type: 'number'},
        {scaleKey: "fontFamily", ns: 'fontFamily', class: ['font-family'], type: 'family-name'},
    ]],
    ["leading", [
        {scaleKey: "lineHeight", ns: 'lineHeight', class: ['line-height'], type: 'number'},
    ]],
    ["tracking", [
        {scaleKey: "letterSpacing", ns: 'letterSpacing', class: ['letter-spacing'], type: 'length', supportNegative: true},
    ]],
    ["bg", [
        {scaleKey: "backgroundImage", ns: 'backgroundImage', class: ['background-image'], type: 'image'},
        {scaleKey: "backgroundPosition", ns: 'backgroundPosition', class: ['background-position'], type: 'position'},
        {scaleKey: "backgroundSize", ns: 'backgroundSize', class: ['background-size'], type: 'bg-size'},
        {scaleKey: "backgroundColor", ns: 'backgroundColor', class: ['background-color'], type: 'color'},
    ]],
    ["from", [
        {scaleKey: "gradientColorStops", ns: 'gradientStopsFrom', class: ['--tw-gradient-from', '--tw-gradient-from-position'], type: 'color'},
        {scaleKey: "gradientColorStopPositions", ns: 'gradientColorFromStops', class: ['--tw-gradient-from', '--tw-gradient-from-position'], type: 'percentage'},
    ]],
    ["to", [
        {scaleKey: "gradientColorStops", ns: 'gradientStopsTo', class: ['--tw-gradient-to', '--tw-gradient-to-position'], type: 'color'},
        {scaleKey: "gradientColorStopPositions", ns: 'gradientColorToStops', class: ['--tw-gradient-from', '--tw-gradient-from-position'], type: 'percentage'},
    ]],
    ["via", [
        {scaleKey: "gradientColorStops", ns: 'gradientStopsVia', class: ['--tw-gradient-from'], type: 'color'},
        {scaleKey: "gradientColorStopPositions", ns: 'gradientColorViaStops', class: ['--tw-gradient-from', '--tw-gradient-from-position'], type: 'percentage'},
    ]],
    ["fill", [
        {scaleKey: "fill", ns: 'fillColor', class: ['fill'], type: 'color'},
    ]],
    ["stroke", [
        {scaleKey: "strokeWidth", ns: 'strokeWidth', class: ['stroke-width'], type: 'line-width'},
        {scaleKey: "stroke", ns: 'strokeColor', class: ['border-color'], type: 'color'},
    ]],
    ["border", [
        {scaleKey: "borderWidth", ns: 'borderWidth', class: ['border-width'], type: 'line-width'},
        {scaleKey: "borderColor", ns: 'borderColor', class: ['border-color'], type: 'color'},
    ]],
    ["ring", [
        {scaleKey: "ringWidth", ns: 'ringWidth', class: ['box-shadow'], type: 'line-width'},
        {scaleKey: "ringColor", ns: 'ringColor', class: ['--tw-ring-color'], type: 'color'},
    ]],
    ["ring-offset", [
        {scaleKey: "ringOffsetWidth", ns: 'ringOffsetWidth', class: ['--tw-ring-offset-width'], type: 'line-width'},
        {scaleKey: "ringOffsetColor", ns: 'ringOffsetColor', class: ['--tw-ring-offset-color'], type: 'color'},
    ]],
    ["rounded", [
        {scaleKey: "borderRadius", ns: 'borderRadius', class: ['border-radius'], type: 'length'},
    ]],
    ["flex", [
        {scaleKey: "flex", ns: 'flex', class: ['flex'], type: 'number'},
    ]],
    ["grid-cols", [
        {scaleKey: "gridTemplateColumns", ns: 'gridTemplateColumns', class: ['grid-template-columns'], type: 'number'},
    ]],
    ["grid-rows", [
        {scaleKey: "gridTemplateRows", ns: 'gridTemplateRows', class: ['grid-template-rows'], type: 'number'},
    ]],
    ["gap", [
        {scaleKey: "gap", ns: 'gap', class: ['gap'], type: 'length'},
    ]],
    ["gap-x", [
        {scaleKey: "gap", ns: 'gapX', class: ['gap'], type: 'length'},
    ]],
    ["gap-y", [
        {scaleKey: "gap", ns: 'gapY', class: ['gap'], type: 'length'},
    ]],
    ["divide-x", [
        {scaleKey: "divideWidth", ns: 'divideX', class: ['border-left-width', 'border-right-width'], type: 'length'},
    ]],
    ["divide-y", [
        {scaleKey: "divideWidth", ns: 'divideY', class: ['border-top-width', 'border-bottom-width'], type: 'length'},
    ]],
    ["divide", [
        {scaleKey: "divideColor", ns: 'divideColor', class: ['--tw-divide-color'], type: 'color'},
    ]],
    ["divide-opacity", [
        {scaleKey: "divideOpacity", ns: 'divideOpacity', class: ['--tw-divide-opacity'], type: 'number'},
    ]],
    ["col", [
        {scaleKey: "gridColumn", ns: 'gridColumn', class: ['grid-column'], type: 'number'},
    ]],
    ["row", [
        {scaleKey: "gridRow", ns: 'gridRow', class: ['grid-row'], type: 'number'},
    ]],
    ["space-x", [
        {scaleKey: "spacing", ns: 'spaceX', class: ['margin-left'], type: 'number', supportNegative: true},
    ]],
    ["space-y", [
        {scaleKey: "spacing", ns: 'spaceY', class: ['margin-top'], type: 'number', supportNegative: true},
    ]],
    ["opacity", [
        {scaleKey: "opacity", ns: 'opacity', class: ['opacity'], type: 'number'},
    ]],
    ["shadow", [
        {scaleKey: "boxShadow", ns: 'boxShadow', class: ['box-shadow'], type: 'length'},
    ]],
    ["transition", [
        {scaleKey: "transitionProperty", ns: 'transitionProperty', class: ['transition-property'], type: 'named'},
    ]],
    ["duration", [
        {scaleKey: "transitionDuration", ns: 'transitionDuration', class: ['transition-duration'], type: 'number'},
    ]],
    ["delay", [
        {scaleKey: "transitionDelay", ns: 'transitionDelay', class: ['transition-delay'], type: 'number'},
    ]],
    ["scale", [
        {scaleKey: "scale", ns: 'scale', class: ['scale'], type: 'number', supportNegative: true},
    ]],
    ["rotate", [
        {scaleKey: "rotate", ns: 'rotate', class: ['rotate'], type: 'angle', supportNegative: true},
    ]],
    ["translate", [
        {scaleKey: "translate", ns: 'translate', class: ['transform'], type: 'length', supportNegative: true},
    ]],
    ["translate-y", [
        {scaleKey: "translate", ns: 'translateY', class: ['transform'], type: 'length', supportNegative: true},
    ]],
    ["translate-x", [
        {scaleKey: "translate", ns: 'translateX', class: ['transform'], type: 'length', supportNegative: true},
    ]],
    ["skew", [
        {scaleKey: "skew", ns: 'skew', class: ['skew'], type: 'angle', supportNegative: true},
    ]],
    ["z", [
        {scaleKey: "zIndex", ns: 'zIndex', class: ['z-index'], type: 'number', supportNegative: true},
    ]],
    ["inset", [
        {scaleKey: "inset", ns: 'inset', class: ['inset'], type: 'length', supportNegative: true},
    ]],
    ["inset-x", [
        {scaleKey: "inset", ns: 'insetX', class: ['inset-x'], type: 'length', supportNegative: true},
    ]],
    ["inset-x", [
        {scaleKey: "inset", ns: 'insetY', class: ['inset'], type: 'length', supportNegative: true},
    ]],
    ["inset-x", [
        {scaleKey: "inset", ns: 'insetX', class: ['left', 'right'], type: 'length', supportNegative: true},
    ]],
    ["inset-x", [
        {scaleKey: "inset", ns: 'insetY', class: ['top', 'bottom'], type: 'length', supportNegative: true},
    ]],
    ["top", [
        {scaleKey: "inset", ns: 'positionTop', class: ['top'], type: 'length', supportNegative: true},
    ]],
    ["right", [
        {scaleKey: "inset", ns: 'positionRight', class: ['right'], type: 'length', supportNegative: true},
    ]],
    ["bottom", [
        {scaleKey: "inset", ns: 'positionBottom', class: ['bottom'], type: 'length', supportNegative: true},
    ]],
    ["left", [
        {scaleKey: "inset", ns: 'positionLeft', class: ['left'], type: 'length', supportNegative: true},
    ]],
    ["start", [
        {scaleKey: "inset", ns: 'insetInlineStart', class: ['inset-inline-start'], type: 'length', supportNegative: true},
    ]],
    ["end", [
        {scaleKey: "inset", ns: 'insetInlineEnd', class: ['inset-inline-end'], type: 'length', supportNegative: true},
    ]],
    ["order", [
        {scaleKey: "order", ns: 'order', class: ['order'], type: 'length', supportNegative: true},
    ]],
    ["blur", [
        {scaleKey: "blur", ns: 'blur', class: ['filter'], type: 'number'},
    ]],
    ["brightness", [
        {scaleKey: "brightness", ns: 'brightness', class: ['filter'], type: 'number'},
    ]],
    ["contrast", [
        {scaleKey: "contrast", ns: 'contrast', class: ['filter'], type: 'number'},
    ]],
    ["drop-shadow", [
        {scaleKey: "dropShadow", ns: 'dropShadow', class: ['filter'], type: 'number'},
    ]],
    ["hue-rotate", [
        {scaleKey: "hueRotate", ns: 'hueRotate', class: ['filter'], type: 'number'},
    ]],
    ["saturate", [
        {scaleKey: "saturate", ns: 'saturate', class: ['filter'], type: 'number'},
    ]],
    ["backdrop-blur", [
        {scaleKey: "blur", ns: 'blur', class: ['filter'], type: 'number'},
    ]],
    ["backdrop-brightness", [
        {scaleKey: "backdropBrightness", ns: 'backdropBrightness', class: ['backdrop-filter'], type: 'number'},
    ]],
    ["backdrop-contrast", [
        {scaleKey: "backdropContrast", ns: 'backdropContrast', class: ['backdrop-filter'], type: 'number'},
    ]],
    ["backdrop-drop-shadow", [
        {scaleKey: "backdropDropShadow", ns: 'backdropDropShadow', class: ['backdrop-filter'], type: 'number'},
    ]],
    ["backdrop-hue-rotate", [
        {scaleKey: "backdropHueRotate", ns: 'backdropHueRotate', class: ['backdrop-filter'], type: 'number'},
    ]],
    ["backdrop-saturate", [
        {scaleKey: "backdropSaturate", ns: 'backdropSaturate', class: ['backdrop-filter'], type: 'number'},
    ]],
]);

export const namedPlugins = new Map<string, NamedPlugin>([
    // Border Styles
    ["border-solid", {class: ['border-style'], value: 'solid', ns: 'borderStyle'}],
    ["border-dashed", {class: ['border-style'], value: 'dashed', ns: 'borderStyle'}],
    ["border-dotted", {class: ['border-style'], value: 'dotted', ns: 'borderStyle'}],
    ["border-double", {class: ['border-style'], value: 'double', ns: 'borderStyle'}],
    ["border-none", {class: ['border-style'], value: 'none', ns: 'borderStyle'}],
    ["ring-inset", {class: ['--tw-ring-inset'], value: 'inset', ns: 'ring'}],

    ["divide-solid", {class: ['divide-style'], value: 'solid', ns: 'divideStyle'}],
    ["divide-dashed", {class: ['divide-style'], value: 'dashed', ns: 'divideStyle'}],
    ["divide-dotted", {class: ['divide-style'], value: 'dotted', ns: 'divideStyle'}],
    ["divide-double", {class: ['divide-style'], value: 'double', ns: 'divideStyle'}],
    ["divide-none", {class: ['divide-style'], value: 'none', ns: 'divideStyle'}],

    // Display
    ["block", {class: ['display'], value: 'block', ns: 'display'}],
    ["inline-block", {class: ['display'], value: 'inline-block', ns: 'display'}],
    ["inline", {class: ['display'], value: 'inline', ns: 'display'}],
    ["flex", {class: ['display'], value: 'flex', ns: 'display'}],
    ["grid", {class: ['display'], value: 'grid', ns: 'display'}],
    ["hidden", {class: ['display'], value: 'none', ns: 'display'}],
    ["table", {class: ['display'], value: 'table', ns: 'display'}],
    ["table-row", {class: ['display'], value: 'table-row', ns: 'display'}],
    ["table-cell", {class: ['display'], value: 'table-cell', ns: 'display'}],
    ["contents", {class: ['display'], value: 'contents', ns: 'display'}],
    ["list-item", {class: ['display'], value: 'list-item', ns: 'display'}],
    ["flow-root", {class: ['display'], value: 'flow-root', ns: 'display'}],

    // Visibility
    ["visible", {class: ['visibility'], value: 'visible', ns: 'visibility'}],
    ["invisible", {class: ['visibility'], value: 'hidden', ns: 'visibility'}],

    // Hyphens
    ["hyphens-none", {class: ['hyphens'], value: 'none', ns: 'hyphens'}],
    ["hyphens-manual", {class: ['hyphens'], value: 'manual', ns: 'hyphens'}],
    ["hyphens-auto", {class: ['hyphens'], value: 'auto', ns: 'hyphens'}],

    // Word Break
    ["break-normal", {class: ['word-break', 'overflow-wrap'], value: 'normal', ns: 'wordBreak'}],
    ["break-words", {class: ['overflow-wrap'], value: 'break-word', ns: 'wordBreak'}],
    ["break-all", {class: ['word-break'], value: 'break-all', ns: 'wordBreak'}],
    ["break-keep", {class: ['word-break'], value: 'keep-all', ns: 'wordBreak'}],

    // Whitespace
    ["whitespace-normal", {class: ['white-space'], value: 'normal', ns: 'whitespace'}],
    ["whitespace-nowrap", {class: ['white-space'], value: 'nowrap', ns: 'whitespace'}],
    ["whitespace-pre", {class: ['white-space'], value: 'pre', ns: 'whitespace'}],
    ["whitespace-pre-line", {class: ['white-space'], value: 'pre-line', ns: 'whitespace'}],
    ["whitespace-pre-wrap", {class: ['white-space'], value: 'pre-wrap', ns: 'whitespace'}],
    ["whitespace-break-spaces", {class: ['white-space'], value: 'break-spaces', ns: 'whitespace'}],

    // Position
    ["static", {class: ['position'], value: 'static', ns: 'position'}],
    ["fixed", {class: ['position'], value: 'fixed', ns: 'position'}],
    ["absolute", {class: ['position'], value: 'absolute', ns: 'position'}],
    ["relative", {class: ['position'], value: 'relative', ns: 'position'}],
    ["sticky", {class: ['position'], value: 'sticky', ns: 'position'}],

    // Overflow
    ["overflow-auto", {class: ['overflow'], value: 'auto', ns: 'overflow'}],
    ["overflow-hidden", {class: ['overflow'], value: 'hidden', ns: 'overflow'}],
    ["overflow-visible", {class: ['overflow'], value: 'visible', ns: 'overflow'}],
    ["overflow-scroll", {class: ['overflow'], value: 'scroll', ns: 'overflow'}],
    ["overflow-x-auto", {class: ['overflow-x'], value: 'auto', ns: 'overflowX'}],
    ["overflow-x-hidden", {class: ['overflow-x'], value: 'hidden', ns: 'overflowX'}],
    ["overflow-x-visible", {class: ['overflow-x'], value: 'visible', ns: 'overflowX'}],
    ["overflow-x-scroll", {class: ['overflow-x'], value: 'scroll', ns: 'overflowX'}],
    ["overflow-y-auto", {class: ['overflow-y'], value: 'auto', ns: 'overflowY'}],
    ["overflow-y-hidden", {class: ['overflow-y'], value: 'hidden', ns: 'overflowY'}],
    ["overflow-y-visible", {class: ['overflow-y'], value: 'visible', ns: 'overflowY'}],
    ["overflow-y-scroll", {class: ['overflow-y'], value: 'scroll', ns: 'overflowY'}],

    // Text Align
    ["text-left", {class: ['text-align'], value: 'left', ns: 'textAlign'}],
    ["text-center", {class: ['text-align'], value: 'center', ns: 'textAlign'}],
    ["text-right", {class: ['text-align'], value: 'right', ns: 'textAlign'}],
    ["text-justify", {class: ['text-align'], value: 'justify', ns: 'textAlign'}],
    ["text-start", {class: ['text-align'], value: 'start', ns: 'textAlign'}],
    ["text-end", {class: ['text-align'], value: 'end', ns: 'textAlign'}],

    // Text Decoration
    ["underline", {class: ['text-decoration-line'], value: 'underline', ns: 'textDecoration'}],
    ["line-through", {class: ['text-decoration-line'], value: 'line-through', ns: 'textDecoration'}],
    ["overline", {class: ['text-decoration-line'], value: 'overline', ns: 'textDecoration'}],
    ["no-underline", {class: ['text-decoration-line'], value: 'none', ns: 'textDecoration'}],

    // Text Wrap
    ["text-wrap", {class: ['text-wrap'], value: 'wrap', ns: 'textWrap'}],
    ["text-nowrap", {class: ['text-wrap'], value: 'nowrap', ns: 'textWrap'}],
    ["text-balance", {class: ['text-wrap'], value: 'balance', ns: 'textWrap'}],
    ["text-pretty", {class: ['text-wrap'], value: 'pretty', ns: 'textWrap'}],

    // Text Overflow
    ["truncate", {class: ['overflow', 'text-overflow', 'white-space'], value: '', ns: 'TextOverflow'}],
    ["text-ellipsis", {class: ['text-overflow'], value: 'ellipsis', ns: 'textWrap'}],
    ["text-clip", {class: ['text-overflow'], value: 'clip', ns: 'textWrap'}],

    // Text Transform
    ["uppercase", {class: ['text-transform'], value: 'uppercase', ns: 'textTransform'}],
    ["lowercase", {class: ['text-transform'], value: 'lowercase', ns: 'textTransform'}],
    ["capitalize", {class: ['text-transform'], value: 'capitalize', ns: 'textTransform'}],
    ["normal-case", {class: ['text-transform'], value: 'none', ns: 'textTransform'}],

    // Font Style
    ["italic", {class: ['font-style'], value: 'italic', ns: 'fontStyle'}],
    ["not-italic", {class: ['font-style'], value: 'normal', ns: 'fontStyle'}],

    // Background Attachment
    ["bg-fixed", {class: ['background-attachment'], value: 'fixed', ns: 'backgroundAttachment'}],
    ["bg-local", {class: ['background-attachment'], value: 'local', ns: 'backgroundAttachment'}],
    ["bg-scroll", {class: ['background-attachment'], value: 'scroll', ns: 'backgroundAttachment'}],

    // Background Repeat
    ["bg-repeat", {class: ['background-repeat'], value: 'repeat', ns: 'backgroundRepeat'}],
    ["bg-no-repeat", {class: ['background-repeat'], value: 'no-repeat', ns: 'backgroundRepeat'}],
    ["bg-repeat-x", {class: ['background-repeat'], value: 'repeat-x', ns: 'backgroundRepeat'}],
    ["bg-repeat-y", {class: ['background-repeat'], value: 'repeat-y', ns: 'backgroundRepeat'}],
    ["bg-repeat-round", {class: ['background-repeat'], value: 'round', ns: 'backgroundRepeat'}],
    ["bg-repeat-space", {class: ['background-repeat'], value: 'space', ns: 'backgroundRepeat'}],

    // Flex Direction
    ["flex-row", {class: ['flex-direction'], value: 'row', ns: 'flexDirection'}],
    ["flex-row-reverse", {class: ['flex-direction'], value: 'row-reverse', ns: 'flexDirection'}],
    ["flex-col", {class: ['flex-direction'], value: 'column', ns: 'flexDirection'}],
    ["flex-col-reverse", {class: ['flex-direction'], value: 'column-reverse', ns: 'flexDirection'}],

    // Flex Wrap
    ["flex-wrap", {class: ['flex-wrap'], value: 'wrap', ns: 'flexWrap'}],
    ["flex-wrap-reverse", {class: ['flex-wrap'], value: 'wrap-reverse', ns: 'flexWrap'}],
    ["flex-nowrap", {class: ['flex-wrap'], value: 'nowrap', ns: 'flexWrap'}],

    // Align Items
    ["items-start", {class: ['align-items'], value: 'flex-start', ns: 'alignItems'}],
    ["items-end", {class: ['align-items'], value: 'flex-end', ns: 'alignItems'}],
    ["items-center", {class: ['align-items'], value: 'center', ns: 'alignItems'}],
    ["items-baseline", {class: ['align-items'], value: 'baseline', ns: 'alignItems'}],
    ["items-stretch", {class: ['align-items'], value: 'stretch', ns: 'alignItems'}],

    // Justify Content
    ["justify-start", {class: ['justify-content'], value: 'flex-start', ns: 'justifyContent'}],
    ["justify-end", {class: ['justify-content'], value: 'flex-end', ns: 'justifyContent'}],
    ["justify-center", {class: ['justify-content'], value: 'center', ns: 'justifyContent'}],
    ["justify-between", {class: ['justify-content'], value: 'space-between', ns: 'justifyContent'}],
    ["justify-around", {class: ['justify-content'], value: 'space-around', ns: 'justifyContent'}],
    ["justify-evenly", {class: ['justify-content'], value: 'space-evenly', ns: 'justifyContent'}],

    // Flex Grow & Shrink
    ["grow", {class: ['flex-grow'], value: '1', ns: 'flexGrow'}],
    ["grow-0", {class: ['flex-grow'], value: '0', ns: 'flexGrow'}],
    ["flex-grow", {class: ['flex-grow'], value: '1', ns: 'flexGrow'}],
    ["flex-grow-0", {class: ['flex-grow'], value: '0', ns: 'flexGrow'}],
    ["shrink", {class: ['flex-shrink'], value: '1', ns: 'flexShrink'}],
    ["shrink-0", {class: ['flex-shrink'], value: '0', ns: 'flexShrink'}],
    ["flex-shrink", {class: ['flex-shrink'], value: '1', ns: 'flexShrink'}],
    ["flex-shrink-0", {class: ['flex-shrink'], value: '0', ns: 'flexShrink'}],

    // Filters
    ["grayscale", {class: ['filter'], value: 'grayscale(100%)', ns: 'grayScale'}],
    ["grayscale-0", {class: ['filter'], value: 'grayscale(0)', ns: 'grayScale'}],
    ["invert", {class: ['filter'], value: 'invert(100%)', ns: 'invert'}],
    ["invert-0", {class: ['filter'], value: 'invert(0)', ns: 'invert'}],
    ["sepia", {class: ['filter'], value: 'sepia(100%)', ns: 'sepia'}],
    ["sepia-0", {class: ['filter'], value: 'sepia(0)', ns: 'sepia'}],
    ["backdrop-grayscale", {class: ['backdrop-filter'], value: 'backdrop-grayscale(100%)', ns: 'backdropGrayScale'}],
    ["backdrop-grayscale-0", {class: ['backdrop-filter'], value: 'backdrop-grayscale(0)', ns: 'backdropGrayScale'}],
    ["backdrop-invert", {class: ['backdrop-filter'], value: 'backdrop-invert(100%)', ns: 'backdrop-invert'}],
    ["backdrop-invert-0", {class: ['backdrop-filter'], value: 'backdrop-invert(0)', ns: 'backdrop-invert'}],
    ["backdrop-sepia", {class: ['backdrop-filter'], value: 'backdrop-sepia(100%)', ns: 'backdrop-sepia'}],
    ["backdrop-sepia-0", {class: ['backdrop-filter'], value: 'backdrop-sepia(0)', ns: 'backdrop-sepia'}],

    ["ease-linear", {class: ['transition-timing-function'], value: 'linear', ns: 'transitionTiming'}],
    ["ease-in", {class: ['transition-timing-function'], value: 'cubic-bezier(0.4, 0, 1, 1)', ns: 'transitionTiming'}],
    ["ease-out", {class: ['transition-timing-function'], value: 'cubic-bezier(0, 0, 0.2, 1)', ns: 'transitionTiming'}],
    ["ease-in-out", {class: ['transition-timing-function'], value: 'cubic-bezier(0.4, 0, 0.2, 1)', ns: 'transitionTiming'}],
])

export const variants = new Map<string, Variant["type"]>([
    ['first', 'pseudo'],
    ['last', 'pseudo'],
    ['only', 'pseudo'],
    ['odd', 'pseudo'],
    ['even', 'pseudo'],
    ['first-of-type', 'pseudo'],
    ['last-of-type', 'pseudo'],
    ['only-of-type', 'pseudo'],

    // State
    ['visited', 'state'],
    ['target', 'state'],
    ['open', 'state'],

    // Forms
    ['default', 'form'],
    ['checked', 'form'],
    ['indeterminate', 'form'],
    ['placeholder-shown', 'form'],
    ['autofill', 'form'],
    ['optional', 'form'],
    ['required', 'form'],
    ['valid', 'form'],
    ['invalid', 'form'],
    ['in-range', 'form'],
    ['out-of-range', 'form'],
    ['read-only', 'form'],

    // Content
    ['empty', 'content'],

    // Interactive
    ['focus-within', 'interaction'],
    ['hover', 'interaction'],
    ['group-hover', 'interaction'],
    ['focus', 'interaction'],
    ['focus-visible', 'interaction'],
    ['active', 'interaction'],
    ['enabled', 'interaction'],
    ['disabled', 'interaction'],

    ['dark', 'system']
])

export const getPluginsByNs = (ns: string, pluginMap: Map<string, NamedPlugin | FunctionalPlugin>) => {
    const filteredMap = new Map()
    for(const [key, value] of Object.entries(pluginMap)) {
        console.log(value)

        if(Array.isArray(value)){
            for(const plugin of value){
                if(plugin.ns === ns) {
                    filteredMap.set(key, plugin)
                }
            }
        }else if(value.ns === ns) {
            filteredMap.set(key, value)
        }
    }

    return filteredMap
}