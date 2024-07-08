export const functionalPlugins = new Map<string, (candidate: string) => void>([
    ["bg", (candidate: string) => {
        console.log(candidate)
    }]
    // Background
   /* ["backgroundImage", {prefix: 'bg', scale: 'backgroundImage'}],
    ["backgroundPosition", {prefix: 'bg', scale: 'backgroundPosition'}],
    ["backgroundSize", {prefix: 'bg', scale: 'backgroundSize'}],
    ["backgroundColor", {prefix: 'bg', scale: 'backgroundColor'}],
    ["backgroundOpacity", {prefix: 'bg', scale: 'backgroundOpacity'}],

    // Border
    ["borderColor", {prefix: 'border', scale: 'borderColor'}],
    ["borderOpacity", {prefix: 'border', scale: 'borderOpacity'}],
    ["borderRadius", {prefix: 'rounded', scale: 'borderRadius'}],
    ["borderWidth", {prefix: 'border', scale: 'borderWidth'}],
    ["borderStyle", {prefix: 'border', scale: 'borderStyle'}],

    // Colors
    ["textColor", {prefix: 'text', scale: 'textColor'}],
    ["textOpacity", {prefix: 'text-opacity', scale: 'textOpacity'}],
    ["placeholderColor", {prefix: 'placeholder', scale: 'placeholderColor'}],
    ["placeholderOpacity", {prefix: 'placeholder', scale: 'placeholderOpacity'}],

    // Flexbox
    ["flex", {prefix: 'flex', scale: 'flex'}],
    ["flexDirection", {prefix: 'flex', scale: 'flexDirection'}],
    ["flexWrap", {prefix: 'flex', scale: 'flexWrap'}],
    ["alignItems", {prefix: 'items', scale: 'alignItems'}],
    ["justifyContent", {prefix: 'justify', scale: 'justifyContent'}],
    ["alignContent", {prefix: 'content', scale: 'alignContent'}],
    ["alignSelf", {prefix: 'self', scale: 'alignSelf'}],

    // Grid
    ["gridTemplateColumns", {prefix: 'grid-cols', scale: 'gridTemplateColumns'}],
    ["gridTemplateRows", {prefix: 'grid-rows', scale: 'gridTemplateRows'}],
    ["gap", {prefix: 'gap', scale: 'gap'}],
    ["justifyItems", {prefix: 'justify-items', scale: 'justifyItems'}],
    ["alignItems", {prefix: 'items', scale: 'alignItems'}],
    ["placeItems", {prefix: 'place-items', scale: 'placeItems'}],
    ["justifySelf", {prefix: 'justify-self', scale: 'justifySelf'}],
    ["alignSelf", {prefix: 'self', scale: 'alignSelf'}],
    ["placeSelf", {prefix: 'place-self', scale: 'placeSelf'}],

    // Layout
    ["display", {prefix: 'display', scale: 'display'}],
    ["overflow", {prefix: 'overflow', scale: 'overflow'}],
    ["overflowX", {prefix: 'overflow-x', scale: 'overflowX'}],
    ["overflowY", {prefix: 'overflow-y', scale: 'overflowY'}],
    ["position", {prefix: 'position', scale: 'position'}],
    ["inset", {prefix: 'inset', scale: 'inset'}],
    ["insetX", {prefix: 'inset-x', scale: 'insetX'}],
    ["insetY", {prefix: 'inset-y', scale: 'insetY'}],
    ["top", {prefix: 'top', scale: 'inset'}],
    ["right", {prefix: 'right', scale: 'inset'}],
    ["bottom", {prefix: 'bottom', scale: 'inset'}],
    ["left", {prefix: 'left', scale: 'inset'}],

    // Sizing
    ["width", {prefix: 'w', scale: 'width'}],
    ["minWidth", {prefix: 'min-w', scale: 'minWidth'}],
    ["maxWidth", {prefix: 'max-w', scale: 'maxWidth'}],
    ["height", {prefix: 'h', scale: 'height'}],
    ["minHeight", {prefix: 'min-h', scale: 'minHeight'}],
    ["maxHeight", {prefix: 'max-h', scale: 'maxHeight'}],

    // Spacing
    ["padding", {prefix: 'p', scale: 'padding'}],
    ["paddingX", {prefix: 'px', scale: 'padding'}],
    ["paddingY", {prefix: 'py', scale: 'padding'}],
    ["paddingTop", {prefix: 'pt', scale: 'padding'}],
    ["paddingRight", {prefix: 'pr', scale: 'padding'}],
    ["paddingBottom", {prefix: 'pb', scale: 'padding'}],
    ["paddingLeft", {prefix: 'pl', scale: 'padding'}],
    ["margin", {prefix: 'm', scale: 'margin'}],
    ["marginX", {prefix: 'mx', scale: 'margin'}],
    ["marginY", {prefix: 'my', scale: 'margin'}],
    ["marginTop", {prefix: 'mt', scale: 'margin'}],
    ["marginRight", {prefix: 'mr', scale: 'margin'}],
    ["marginBottom", {prefix: 'mb', scale: 'margin'}],
    ["marginLeft", {prefix: 'ml', scale: 'margin'}],

    // Typography
    ["fontFamily", {prefix: 'font', scale: 'fontFamily'}],
    ["fontSize", {prefix: 'text', scale: 'fontSize'}],
    ["fontWeight", {prefix: 'font', scale: 'fontWeight'}],
    ["letterSpacing", {prefix: 'tracking', scale: 'letterSpacing'}],
    ["lineHeight", {prefix: 'leading', scale: 'lineHeight'}],
    ["textAlign", {prefix: 'text', scale: 'textAlign'}],
    ["textDecoration", {prefix: 'underline', scale: 'textDecoration'}],
    ["textTransform", {prefix: 'uppercase', scale: 'textTransform'}],
    ["textOverflow", {prefix: 'truncate', scale: 'textOverflow'}],
    ["whitespace", {prefix: 'whitespace', scale: 'whitespace'}],
    ["wordBreak", {prefix: 'break', scale: 'wordBreak'}],

    // Interactivity
    ["appearance", {prefix: 'appearance', scale: 'appearance'}],
    ["cursor", {prefix: 'cursor', scale: 'cursor'}],
    ["outline", {prefix: 'outline', scale: 'outline'}],
    ["pointerEvents", {prefix: 'pointer-events', scale: 'pointerEvents'}],
    ["resize", {prefix: 'resize', scale: 'resize'}],
    ["userSelect", {prefix: 'select', scale: 'userSelect'}],

    // Transitions and Animations
    ["transitionProperty", {prefix: 'transition', scale: 'transitionProperty'}],
    ["transitionTimingFunction", {prefix: 'ease', scale: 'transitionTimingFunction'}],
    ["transitionDuration", {prefix: 'duration', scale: 'transitionDuration'}],
    ["transitionDelay", {prefix: 'delay', scale: 'transitionDelay'}],
    ["animation", {prefix: 'animate', scale: 'animation'}]*/
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

function filterMapByPrefix(map: Map<string, { prefix: string, scale: string }>, prefix: string) {
    return Array.from(map.entries()).filter(([key, value]) => value.prefix === prefix);
}

/*export const possiblePlugins = (prefix: string) => {
    return filterMapByPrefix(plugins, prefix);
}*/

export const findNamedProperty = (name: string) => {
    const classToKeyMap = new Map<string, string>();
    for (const [key, value] of namedPlugins) {
        classToKeyMap.set(value.class, key);
    }
    return classToKeyMap.get(name);
}