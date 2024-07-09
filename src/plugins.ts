import type {DataType} from "./utils/infer-data-type";
import type {Variant} from "./utils/types";

export type FunctionalPlugin = {
    class: string,
    ns: string,
    type: DataType
    supportNegative?: boolean
}

export type NamedPlugin = {
    ns: string,
    value: string,
    class: string
}

export const functionalPlugins = new Map<string, FunctionalPlugin[]>([
    ["w", [
        {ns: 'width', class: 'width', type: 'length'},
        {ns: 'width', class: 'width', type: 'percentage'},
    ]],
    ["h", [
        {ns: 'height', class: 'height', type: 'length'},
        {ns: 'height', class: 'height', type: 'percentage'},
    ]],
    ["m", [
        {ns: 'margin', class: 'margin', type: 'length'},
    ]],
    ["mx", [
        {ns: 'marginLeft', class: 'margin-left', type: 'length'},
        {ns: 'marginRight', class: 'margin-right', type: 'length'},
    ]],
    ["my", [
        {ns: 'marginTop', class: 'margin-top', type: 'length'},
        {ns: 'marginBottom', class: 'margin-bottom', type: 'length'},
    ]],
    ["mt", [
        {ns: 'marginTop', class: 'margin-top', type: 'length'},
    ]],
    ["mr", [
        {ns: 'marginRight', class: 'margin-right', type: 'length'},
    ]],
    ["mb", [
        {ns: 'marginBottom', class: 'margin-bottom', type: 'length'},
    ]],
    ["ml", [
        {ns: 'marginLeft', class: 'margin-left', type: 'length'},
    ]],
    ["p", [
        {ns: 'padding', class: 'padding', type: 'length'},
    ]],
    ["px", [
        {ns: 'paddingLeft', class: 'padding-left', type: 'length'},
        {ns: 'paddingRight', class: 'padding-right', type: 'length'},
    ]],
    ["py", [
        {ns: 'paddingTop', class: 'padding-top', type: 'length'},
        {ns: 'paddingBottom', class: 'padding-bottom', type: 'length'},
    ]],
    ["pt", [
        {ns: 'paddingTop', class: 'padding-top', type: 'length'},
    ]],
    ["pr", [
        {ns: 'paddingRight', class: 'padding-right', type: 'length'},
    ]],
    ["pb", [
        {ns: 'paddingBottom', class: 'padding-bottom', type: 'length'},
    ]],
    ["pl", [
        {ns: 'paddingLeft', class: 'padding-left', type: 'length'},
    ]],
    ["text", [
        {ns: 'fontSize', class: 'font-size', type: 'length'},
        {ns: 'color', class: 'color', type: 'color'},
    ]],
    ["font", [
        {ns: 'fontWeight', class: 'font-weight', type: 'number'},
        {ns: 'fontFamily', class: 'font-family', type: 'family-name'},
    ]],
    ["leading", [
        {ns: 'lineHeight', class: 'line-height', type: 'number'},
    ]],
    ["tracking", [
        {ns: 'letterSpacing', class: 'letter-spacing', type: 'length'},
    ]],
    ["bg", [
        {ns: 'backgroundImage', class: 'background-image', type: 'image'},
        {ns: 'backgroundPosition', class: 'background-position', type: 'position'},
        {ns: 'backgroundSize', class: 'background-size', type: 'bg-size'},
        {ns: 'backgroundColor', class: 'background-color', type: 'color'},
    ]],
    ["border", [
        {ns: 'borderWidth', class: 'border-width', type: 'line-width'},
        {ns: 'borderColor', class: 'border-color', type: 'color'},
        {ns: 'borderStyle', class: 'border-style', type: 'line-width'},
    ]],
    ["rounded", [
        {ns: 'borderRadius', class: 'border-radius', type: 'length'},
    ]],
    ["flex", [
        {ns: 'flex', class: 'flex', type: 'number'},
    ]],
    ["grid", [
        {ns: 'gridTemplateColumns', class: 'grid-template-columns', type: 'number'},
        {ns: 'gridTemplateRows', class: 'grid-template-rows', type: 'number'},
    ]],
    ["gap", [
        {ns: 'gap', class: 'gap', type: 'length'},
    ]],
    ["col", [
        {ns: 'gridColumn', class: 'grid-column', type: 'number'},
    ]],
    ["row", [
        {ns: 'gridRow', class: 'grid-row', type: 'number'},
    ]],
    ["opacity", [
        {ns: 'opacity', class: 'opacity', type: 'number'},
    ]],
    ["shadow", [
        {ns: 'boxShadow', class: 'box-shadow', type: 'length'},
    ]],
    ["transition", [
        {ns: 'transitionProperty', class: 'transition-property', type: 'number'},
        {ns: 'transitionDuration', class: 'transition-duration', type: 'number'},
    ]],
    ["scale", [
        {ns: 'scale', class: 'scale', type: 'number'},
    ]],
    ["rotate", [
        {ns: 'rotate', class: 'rotate', type: 'angle'},
    ]],
    ["translate", [
        {ns: 'translate', class: 'translate', type: 'length'},
        {ns: 'translate', class: 'translate', type: 'percentage'},
    ]],
    ["skew", [
        {ns: 'skew', class: 'skew', type: 'angle'},
    ]],
    ["inset", [
        {ns: 'top', class: 'top', type: 'length'},
        {ns: 'right', class: 'right', type: 'length'},
        {ns: 'bottom', class: 'bottom', type: 'length'},
        {ns: 'left', class: 'left', type: 'length'},
    ]],
    ["z", [
        {ns: 'zIndex', class: 'z-index', type: 'number'},
    ]],
]);

export const namedPlugins = new Map<string, NamedPlugin>([
    // Border Styles
    ["border-solid", {class: 'border-style', value: 'solid', ns: 'borderStyle'}],
    ["border-dashed", {class: 'border-style', value: 'dashed', ns: 'borderStyle'}],
    ["border-dotted", {class: 'border-style', value: 'dotted', ns: 'borderStyle'}],
    ["border-double", {class: 'border-style', value: 'double', ns: 'borderStyle'}],
    ["border-none", {class: 'border-style', value: 'none', ns: 'borderStyle'}],

    // Display
    ["block", {class: 'display', value: 'block', ns: 'display'}],
    ["inline-block", {class: 'display', value: 'inline-block', ns: 'display'}],
    ["inline", {class: 'display', value: 'inline', ns: 'display'}],
    ["flex", {class: 'display', value: 'flex', ns: 'display'}],
    ["grid", {class: 'display', value: 'grid', ns: 'display'}],
    ["hidden", {class: 'display', value: 'none', ns: 'display'}],
    ["table", {class: 'display', value: 'table', ns: 'display'}],
    ["table-row", {class: 'display', value: 'table-row', ns: 'display'}],
    ["table-cell", {class: 'display', value: 'table-cell', ns: 'display'}],
    ["contents", {class: 'display', value: 'contents', ns: 'display'}],
    ["list-item", {class: 'display', value: 'list-item', ns: 'display'}],
    ["flow-root", {class: 'display', value: 'flow-root', ns: 'display'}],

    // Visibility
    ["visible", {class: 'visibility', value: 'visible', ns: 'visibility'}],
    ["invisible", {class: 'visibility', value: 'hidden', ns: 'visibility'}],

    // Position
    ["static", {class: 'position', value: 'static', ns: 'position'}],
    ["fixed", {class: 'position', value: 'fixed', ns: 'position'}],
    ["absolute", {class: 'position', value: 'absolute', ns: 'position'}],
    ["relative", {class: 'position', value: 'relative', ns: 'position'}],
    ["sticky", {class: 'position', value: 'sticky', ns: 'position'}],

    // Overflow
    ["overflow-auto", {class: 'overflow', value: 'auto', ns: 'overflow'}],
    ["overflow-hidden", {class: 'overflow', value: 'hidden', ns: 'overflow'}],
    ["overflow-visible", {class: 'overflow', value: 'visible', ns: 'overflow'}],
    ["overflow-scroll", {class: 'overflow', value: 'scroll', ns: 'overflow'}],
    ["overflow-x-auto", {class: 'overflow-x', value: 'auto', ns: 'overflowX'}],
    ["overflow-x-hidden", {class: 'overflow-x', value: 'hidden', ns: 'overflowX'}],
    ["overflow-x-visible", {class: 'overflow-x', value: 'visible', ns: 'overflowX'}],
    ["overflow-x-scroll", {class: 'overflow-x', value: 'scroll', ns: 'overflowX'}],
    ["overflow-y-auto", {class: 'overflow-y', value: 'auto', ns: 'overflowY'}],
    ["overflow-y-hidden", {class: 'overflow-y', value: 'hidden', ns: 'overflowY'}],
    ["overflow-y-visible", {class: 'overflow-y', value: 'visible', ns: 'overflowY'}],
    ["overflow-y-scroll", {class: 'overflow-y', value: 'scroll', ns: 'overflowY'}],

    // Text Decoration
    ["underline", {class: 'text-decoration', value: 'underline', ns: 'textDecoration'}],
    ["line-through", {class: 'text-decoration', value: 'line-through', ns: 'textDecoration'}],
    ["no-underline", {class: 'text-decoration', value: 'none', ns: 'textDecoration'}],

    // Text Transform
    ["uppercase", {class: 'text-transform', value: 'uppercase', ns: 'textTransform'}],
    ["lowercase", {class: 'text-transform', value: 'lowercase', ns: 'textTransform'}],
    ["capitalize", {class: 'text-transform', value: 'capitalize', ns: 'textTransform'}],
    ["normal-case", {class: 'text-transform', value: 'none', ns: 'textTransform'}],

    // Font Style
    ["italic", {class: 'font-style', value: 'italic', ns: 'fontStyle'}],
    ["not-italic", {class: 'font-style', value: 'normal', ns: 'fontStyle'}],

    // Background Attachment
    ["bg-fixed", {class: 'background-attachment', value: 'fixed', ns: 'backgroundAttachment'}],
    ["bg-local", {class: 'background-attachment', value: 'local', ns: 'backgroundAttachment'}],
    ["bg-scroll", {class: 'background-attachment', value: 'scroll', ns: 'backgroundAttachment'}],

    // Background Repeat
    ["bg-repeat", {class: 'background-repeat', value: 'repeat', ns: 'backgroundRepeat'}],
    ["bg-no-repeat", {class: 'background-repeat', value: 'no-repeat', ns: 'backgroundRepeat'}],
    ["bg-repeat-x", {class: 'background-repeat', value: 'repeat-x', ns: 'backgroundRepeat'}],
    ["bg-repeat-y", {class: 'background-repeat', value: 'repeat-y', ns: 'backgroundRepeat'}],
    ["bg-repeat-round", {class: 'background-repeat', value: 'round', ns: 'backgroundRepeat'}],
    ["bg-repeat-space", {class: 'background-repeat', value: 'space', ns: 'backgroundRepeat'}],

    // Flex Direction
    ["flex-row", {class: 'flex-direction', value: 'row', ns: 'flexDirection'}],
    ["flex-row-reverse", {class: 'flex-direction', value: 'row-reverse', ns: 'flexDirection'}],
    ["flex-col", {class: 'flex-direction', value: 'column', ns: 'flexDirection'}],
    ["flex-col-reverse", {class: 'flex-direction', value: 'column-reverse', ns: 'flexDirection'}],

    // Flex Wrap
    ["flex-wrap", {class: 'flex-wrap', value: 'wrap', ns: 'flexWrap'}],
    ["flex-wrap-reverse", {class: 'flex-wrap', value: 'wrap-reverse', ns: 'flexWrap'}],
    ["flex-nowrap", {class: 'flex-wrap', value: 'nowrap', ns: 'flexWrap'}],

    // Align Items
    ["items-start", {class: 'align-items', value: 'flex-start', ns: 'alignItems'}],
    ["items-end", {class: 'align-items', value: 'flex-end', ns: 'alignItems'}],
    ["items-center", {class: 'align-items', value: 'center', ns: 'alignItems'}],
    ["items-baseline", {class: 'align-items', value: 'baseline', ns: 'alignItems'}],
    ["items-stretch", {class: 'align-items', value: 'stretch', ns: 'alignItems'}],

    // Justify Content
    ["justify-start", {class: 'justify-content', value: 'flex-start', ns: 'justifyContent'}],
    ["justify-end", {class: 'justify-content', value: 'flex-end', ns: 'justifyContent'}],
    ["justify-center", {class: 'justify-content', value: 'center', ns: 'justifyContent'}],
    ["justify-between", {class: 'justify-content', value: 'space-between', ns: 'justifyContent'}],
    ["justify-around", {class: 'justify-content', value: 'space-around', ns: 'justifyContent'}],
    ["justify-evenly", {class: 'justify-content', value: 'space-evenly', ns: 'justifyContent'}],

    // Flex Grow & Shrink
    ["flex-grow", {class: 'flex-grow', value: '1', ns: 'flexGrow'}],
    ["flex-grow-0", {class: 'flex-grow', value: '0', ns: 'flexGrow'}],
    ["grow", {class: 'flex-grow', value: '1', ns: 'flexGrow'}],
    ["grow-0", {class: 'flex-grow', value: '0', ns: 'flexGrow'}],
    ["flex-shrink", {class: 'flex-shrink', value: '1', ns: 'flexShrink'}],
    ["flex-shrink-0", {class: 'flex-shrink', value: '0', ns: 'flexShrink'}],
    ["shrink", {class: 'flex-shrink', value: '1', ns: 'flexShrink'}],
    ["shrink-0", {class: 'flex-shrink', value: '0', ns: 'flexShrink'}],

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