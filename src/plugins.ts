import type {UnitType} from "./utils/unit-type.ts";
import type {DataType} from "./utils/infer-data-type.ts";
import type {Variant} from "./utils/types.ts";

export type FunctionalPlugin = {
    prefix: string,
    ns: string,
    type: DataType
    supportNegative?: boolean
}

export const functionalPlugins = new Map<string, FunctionalPlugin[]>([
    // Background
    ["bg", [
        {ns: 'backgroundImage', prefix: 'bg', type: 'image'},
        {ns: 'backgroundPosition', prefix: 'bg', type: 'position'},
        {ns: 'backgroundSize', prefix: 'bg', type: 'bg-size'},
        {ns: 'backgroundColor', prefix: 'bg', type: 'color'},
    ]],
    ["bg-opacity", [
        {ns: 'backgroundOpacity', prefix: 'bg', type: 'number'},
    ]],
    /*
        // Border
        ["borderColor", {prefix: 'border'}],
        ["borderOpacity", {prefix: 'border'}],
        ["borderRadius", {prefix: 'rounded'}],
        ["borderWidth", {prefix: 'border'}],
        ["borderStyle", {prefix: 'border'}],

        // Colors
        ["textColor", {prefix: 'text'}],
        ["textOpacity", {prefix: 'text-opacity'}],
        ["placeholderColor", {prefix: 'placeholder'}],
        ["placeholderOpacity", {prefix: 'placeholder'}],

        // Flexbox
        ["flex", {prefix: 'flex'}],
        ["flexDirection", {prefix: 'flex'}],
        ["flexWrap", {prefix: 'flex'}],
        ["alignItems", {prefix: 'items'}],
        ["justifyContent", {prefix: 'justify'}],
        ["alignContent", {prefix: 'content'}],
        ["alignSelf", {prefix: 'self'}],

        // Grid
        ["gridTemplateColumns", {prefix: 'grid-cols'}],
        ["gridTemplateRows", {prefix: 'grid-rows'}],
        ["gap", {prefix: 'gap'}],
        ["justifyItems", {prefix: 'justify-items'}],
        ["alignItems", {prefix: 'items'}],
        ["placeItems", {prefix: 'place-items'}],
        ["justifySelf", {prefix: 'justify-self'}],
        ["alignSelf", {prefix: 'self'}],
        ["placeSelf", {prefix: 'place-self'}],

        // Layout
        ["display", {prefix: 'display'}],
        ["overflow", {prefix: 'overflow'}],
        ["overflowX", {prefix: 'overflow-x'}],
        ["overflowY", {prefix: 'overflow-y'}],
        ["position", {prefix: 'position'}],
        ["inset", {prefix: 'inset'}],
        ["insetX", {prefix: 'inset-x'}],
        ["insetY", {prefix: 'inset-y'}],
        ["top", {prefix: 'top'}],
        ["right", {prefix: 'right'}],
        ["bottom", {prefix: 'bottom'}],
        ["left", {prefix: 'left'}],

        // Sizing
        ["width", {prefix: 'w'}],
        ["minWidth", {prefix: 'min-w'}],
        ["maxWidth", {prefix: 'max-w'}],
        ["height", {prefix: 'h'}],
        ["minHeight", {prefix: 'min-h'}],
        ["maxHeight", {prefix: 'max-h'}],

        // Spacing
        ["padding", {prefix: 'p'}],
        ["paddingX", {prefix: 'px'}],
        ["paddingY", {prefix: 'py'}],
        ["paddingTop", {prefix: 'pt'}],
        ["paddingRight", {prefix: 'pr'}],
        ["paddingBottom", {prefix: 'pb'}],
        ["paddingLeft", {prefix: 'pl'}],
        ["margin", {prefix: 'm'}],
        ["marginX", {prefix: 'mx'}],
        ["marginY", {prefix: 'my'}],
        ["marginTop", {prefix: 'mt'}],
        ["marginRight", {prefix: 'mr'}],
        ["marginBottom", {prefix: 'mb'}],
        ["marginLeft", {prefix: 'ml'}],

        // Typography
        ["fontFamily", {prefix: 'font'}],
        ["fontSize", {prefix: 'text'}],
        ["fontWeight", {prefix: 'font'}],
        ["letterSpacing", {prefix: 'tracking'}],
        ["lineHeight", {prefix: 'leading'}],
        ["textAlign", {prefix: 'text'}],
        ["textDecoration", {prefix: 'underline'}],
        ["textTransform", {prefix: 'uppercase'}],
        ["textOverflow", {prefix: 'truncate'}],
        ["whitespace", {prefix: 'whitespace'}],
        ["wordBreak", {prefix: 'break'}],

        // Interactivity
        ["appearance", {prefix: 'appearance'}],
        ["cursor", {prefix: 'cursor'}],
        ["outline", {prefix: 'outline'}],
        ["pointerEvents", {prefix: 'pointer-events'}],
        ["resize", {prefix: 'resize'}],
        ["userSelect", {prefix: 'select'}],

        // Transitions and Animations
        ["transitionProperty", {prefix: 'transition'}],
        ["transitionTimingFunction", {prefix: 'ease'}],
        ["transitionDuration", {prefix: 'duration'}],
        ["transitionDelay", {prefix: 'delay'}],
        ["animation", {prefix: 'animate'}]*/
]);

export const namedPlugins = new Map<string, { class: string }>([
    // Border Styles
    ["borderSolid", {class: 'border-solid'}],
    ["borderDashed", {class: 'border-dashed'}],
    ["borderDotted", {class: 'border-dotted'}],
    ["borderDouble", {class: 'border-double'}],
    ["borderNone", {class: 'border-none'}],

    // Display
    ["block", {class: 'block'}],
    ["inlineBlock", {class: 'inline-block'}],
    ["inline", {class: 'inline'}],
    ["flex", {class: 'flex'}],
    ["inlineFlex", {class: 'inline-flex'}],
    ["grid", {class: 'grid'}],
    ["inlineGrid", {class: 'inline-grid'}],
    ["hidden", {class: 'hidden'}],

    // Overflow
    ["overflowAuto", {class: 'overflow-auto'}],
    ["overflowHidden", {class: 'overflow-hidden'}],
    ["overflowVisible", {class: 'overflow-visible'}],
    ["overflowScroll", {class: 'overflow-scroll'}],

    // Position
    ["static", {class: 'static'}],
    ["fixed", {class: 'fixed'}],
    ["absolute", {class: 'absolute'}],
    ["relative", {class: 'relative'}],
    ["sticky", {class: 'sticky'}],

    // Text Decoration
    ["underline", {class: 'underline'}],
    ["lineThrough", {class: 'line-through'}],
    ["noUnderline", {class: 'no-underline'}],

    // Text Transform
    ["uppercase", {class: 'uppercase'}],
    ["lowercase", {class: 'lowercase'}],
    ["capitalize", {class: 'capitalize'}],
    ["normalCase", {class: 'normal-case'}],

    // Visibility
    ["visible", {class: 'visible'}],
    ["invisible", {class: 'invisible'}],

    // Flexbox Utilities
    ["flexRow", {class: 'flex-row'}],
    ["flexRowReverse", {class: 'flex-row-reverse'}],
    ["flexCol", {class: 'flex-col'}],
    ["flexColReverse", {class: 'flex-col-reverse'}],
    ["flexWrap", {class: 'flex-wrap'}],
    ["flexWrapReverse", {class: 'flex-wrap-reverse'}],
    ["flexNoWrap", {class: 'flex-nowrap'}],

    // Align Items
    ["itemsStart", {class: 'items-start'}],
    ["itemsEnd", {class: 'items-end'}],
    ["itemsCenter", {class: 'items-center'}],
    ["itemsBaseline", {class: 'items-baseline'}],
    ["itemsStretch", {class: 'items-stretch'}],

    // Justify Content
    ["justifyStart", {class: 'justify-start'}],
    ["justifyEnd", {class: 'justify-end'}],
    ["justifyCenter", {class: 'justify-center'}],
    ["justifyBetween", {class: 'justify-between'}],
    ["justifyAround", {class: 'justify-around'}],
    ["justifyEvenly", {class: 'justify-evenly'}],

    // Align Content
    ["contentStart", {class: 'content-start'}],
    ["contentEnd", {class: 'content-end'}],
    ["contentCenter", {class: 'content-center'}],
    ["contentBetween", {class: 'content-between'}],
    ["contentAround", {class: 'content-around'}],
    ["contentEvenly", {class: 'content-evenly'}],

    // Align Self
    ["selfAuto", {class: 'self-auto'}],
    ["selfStart", {class: 'self-start'}],
    ["selfEnd", {class: 'self-end'}],
    ["selfCenter", {class: 'self-center'}],
    ["selfStretch", {class: 'self-stretch'}],

    // Place Content
    ["placeContentCenter", {class: 'place-content-center'}],
    ["placeContentStart", {class: 'place-content-start'}],
    ["placeContentEnd", {class: 'place-content-end'}],
    ["placeContentBetween", {class: 'place-content-between'}],
    ["placeContentAround", {class: 'place-content-around'}],
    ["placeContentEvenly", {class: 'place-content-evenly'}],

    // Place Items
    ["placeItemsStart", {class: 'place-items-start'}],
    ["placeItemsEnd", {class: 'place-items-end'}],
    ["placeItemsCenter", {class: 'place-items-center'}],
    ["placeItemsStretch", {class: 'place-items-stretch'}],

    // Place Self
    ["placeSelfAuto", {class: 'place-self-auto'}],
    ["placeSelfStart", {class: 'place-self-start'}],
    ["placeSelfEnd", {class: 'place-self-end'}],
    ["placeSelfCenter", {class: 'place-self-center'}],
    ["placeSelfStretch", {class: 'place-self-stretch'}],

    // Float
    ["floatRight", {class: 'float-right'}],
    ["floatLeft", {class: 'float-left'}],
    ["floatNone", {class: 'float-none'}],

    // Clear
    ["clearLeft", {class: 'clear-left'}],
    ["clearRight", {class: 'clear-right'}],
    ["clearBoth", {class: 'clear-both'}],
    ["clearNone", {class: 'clear-none'}],

    // Object Fit
    ["objectContain", {class: 'object-contain'}],
    ["objectCover", {class: 'object-cover'}],
    ["objectFill", {class: 'object-fill'}],
    ["objectNone", {class: 'object-none'}],
    ["objectScaleDown", {class: 'object-scale-down'}],

    // Object Position
    ["objectBottom", {class: 'object-bottom'}],
    ["objectCenter", {class: 'object-center'}],
    ["objectLeft", {class: 'object-left'}],
    ["objectLeftBottom", {class: 'object-left-bottom'}],
    ["objectLeftTop", {class: 'object-left-top'}],
    ["objectRight", {class: 'object-right'}],
    ["objectRightBottom", {class: 'object-right-bottom'}],
    ["objectRightTop", {class: 'object-right-top'}],
    ["objectTop", {class: 'object-top'}],

    // Pointer Events
    ["pointerEventsNone", {class: 'pointer-events-none'}],
    ["pointerEventsAuto", {class: 'pointer-events-auto'}],

    // Resize
    ["resizeNone", {class: 'resize-none'}],
    ["resizeY", {class: 'resize-y'}],
    ["resizeX", {class: 'resize-x'}],
    ["resize", {class: 'resize'}],

    // User Select
    ["selectNone", {class: 'select-none'}],
    ["selectText", {class: 'select-text'}],
    ["selectAll", {class: 'select-all'}],
    ["selectAuto", {class: 'select-auto'}],

    // List Style Type
    ["listNone", {class: 'list-none'}],
    ["listDisc", {class: 'list-disc'}],
    ["listDecimal", {class: 'list-decimal'}],

    // List Style Position
    ["listInside", {class: 'list-inside'}],
    ["listOutside", {class: 'list-outside'}],

    // Table Layout
    ["tableAuto", {class: 'table-auto'}],
    ["tableFixed", {class: 'table-fixed'}],

    // Text Align
    ["textLeft", {class: 'text-left'}],
    ["textCenter", {class: 'text-center'}],
    ["textRight", {class: 'text-right'}],
    ["textJustify", {class: 'text-justify'}],

    // Vertical Align
    ["alignBaseline", {class: 'align-baseline'}],
    ["alignTop", {class: 'align-top'}],
    ["alignMiddle", {class: 'align-middle'}],
    ["alignBottom", {class: 'align-bottom'}],
    ["alignTextTop", {class: 'align-text-top'}],
    ["alignTextBottom", {class: 'align-text-bottom'}],

    // Whitespace
    ["whitespaceNormal", {class: 'whitespace-normal'}],
    ["whitespaceNoWrap", {class: 'whitespace-no-wrap'}],
    ["whitespacePre", {class: 'whitespace-pre'}],
    ["whitespacePreLine", {class: 'whitespace-pre-line'}],
    ["whitespacePreWrap", {class: 'whitespace-pre-wrap'}],

    // Word Break
    ["breakNormal", {class: 'break-normal'}],
    ["breakWords", {class: 'break-words'}],
    ["breakAll", {class: 'break-all'}],
    ["truncate", {class: 'truncate'}],

    // Background Attachment
    ["bgFixed", {class: 'bg-fixed'}],
    ["bgLocal", {class: 'bg-local'}],
    ["bgScroll", {class: 'bg-scroll'}],

    // Background Clip
    ["bgClipBorder", {class: 'bg-clip-border'}],
    ["bgClipPadding", {class: 'bg-clip-padding'}],
    ["bgClipContent", {class: 'bg-clip-content'}],
    ["bgClipText", {class: 'bg-clip-text'}],

    // Background Origin
    ["bgOriginBorder", {class: 'bg-origin-border'}],
    ["bgOriginPadding", {class: 'bg-origin-padding'}],
    ["bgOriginContent", {class: 'bg-origin-content'}],

    // Background Repeat
    ["bgRepeat", {class: 'bg-repeat'}],
    ["bgNoRepeat", {class: 'bg-no-repeat'}],
    ["bgRepeatX", {class: 'bg-repeat-x'}],
    ["bgRepeatY", {class: 'bg-repeat-y'}],
    ["bgRepeatRound", {class: 'bg-repeat-round'}],
    ["bgRepeatSpace", {class: 'bg-repeat-space'}],

    // Background Size
    ["bgAuto", {class: 'bg-auto'}],
    ["bgCover", {class: 'bg-cover'}],
    ["bgContain", {class: 'bg-contain'}],

    // Ring Offset Color
    ["ringOffsetTransparent", {class: 'ring-offset-transparent'}],
    ["ringOffsetCurrent", {class: 'ring-offset-current'}],
    ["ringOffsetBlack", {class: 'ring-offset-black'}],
    ["ringOffsetWhite", {class: 'ring-offset-white'}],
    ["ringOffsetGray", {class: 'ring-offset-gray'}],
    ["ringOffsetRed", {class: 'ring-offset-red'}],
    ["ringOffsetYellow", {class: 'ring-offset-yellow'}],
    ["ringOffsetGreen", {class: 'ring-offset-green'}],
    ["ringOffsetBlue", {class: 'ring-offset-blue'}],
    ["ringOffsetIndigo", {class: 'ring-offset-indigo'}],
    ["ringOffsetPurple", {class: 'ring-offset-purple'}],
    ["ringOffsetPink", {class: 'ring-offset-pink'}]
])

export const variants = new Map<string, Variant["kind"]>([
    ['first', 'static'],
    ['last', 'static'],
    ['only', 'static'],
    ['odd', 'static'],
    ['even', 'static'],
    ['first-of-type', 'static'],
    ['last-of-type', 'static'],
    ['only-of-type', 'static'],

    // State
    ['visited', 'static'],
    ['target', 'static'],
    ['open', 'static'],

    // Forms
    ['default', 'static'],
    ['checked', 'static'],
    ['indeterminate', 'static'],
    ['placeholder-shown', 'static'],
    ['autofill', 'static'],
    ['optional', 'static'],
    ['required', 'static'],
    ['valid', 'static'],
    ['invalid', 'static'],
    ['in-range', 'static'],
    ['out-of-range', 'static'],
    ['read-only', 'static'],

    // Content
    ['empty', 'static'],

    // Interactive
    ['focus-within', 'static'],
    ['hover', 'static'],
    ['group-hover', 'static'],
    ['focus', 'static'],
    ['focus-visible', 'static'],
    ['active', 'static'],
    ['enabled', 'static'],
    ['disabled', 'static'],
])

export const findNamedProperty = (name: string) => {
    const classToKeyMap = new Map<string, string>();
    for (const [key, value] of namedPlugins) {
        classToKeyMap.set(value.class, key);
    }
    return classToKeyMap.get(name);
}