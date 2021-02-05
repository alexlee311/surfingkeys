// Use Firefox Alpenglow colors for theme
settings.theme = `
.sk_theme {
    font-family: Input Sans Condensed, Charcoal, sans-serif;
    font-size: 13pt;
    background: #281d4e;
    color: #ffffff;
}
.sk_theme tbody {
    color: #ffffff;
}
.sk_theme input {
    color: #ffffff;
}
.sk_theme .url {
    color: #fd6392;
}
.sk_theme .annotation {
    color: #ffffff;
}
.sk_theme .omnibar_highlight {
    color: #e360d7;
}
.sk_theme .omnibar_timestamp {
    color: #fcbb40;
}
.sk_theme .omnibar_visitcount {
    color: #98c379;
}
.sk_theme #sk_omnibarSearchResult ul li:nth-child(odd) {
    background: #321c64;
}
.sk_theme #sk_omnibarSearchResult ul li.focused {
    background: #5128aa;
}
#sk_status, #sk_find {
    font-size: 13pt;
}
#sk_keystroke {
    backgroud: #281d4e;
}
.expandRichHints span.annotation {
    color: #ffffff;
}
.sk_theme .feature_name {
    color: #fd6392;
}
.sk_theme .separator {
    color: #fd6392;
}
div.sk_tab {
    background: #321c64;
}
div.sk_tab_title {
    color: #ffffff;
}
div.sk_tab_url {
    color: #fd6392;
}
div.sk_tab_hint {
    background: #fcbb40;
    border: #fcbb40;
}
:root {
    --theme-ace-bg:#321c64ab;
    --theme-ace-bg-accent:#281d4e;
    --theme-ace-fg:#fcbb40;
    --theme-ace-fg-accent:#78709d;
    --theme-ace-cursor:#fd6392bb;
    --theme-ace-select:#fd6392ab;
}
#sk_editor {
    background: var(--theme-ace-bg) !important;
}
.ace-chrome .ace_print-margin, .ace_gutter, .ace_gutter-cell, .ace_dialog{
    background: var(--theme-ace-bg-accent) !important;
}
.ace_dialog-bottom{
    border-top: 1px solid var(--theme-ace-bg) !important;
}
.ace-chrome{
    color: var(--theme-ace-fg) !important;
}
.ace_gutter, .ace_dialog {
    color: var(--theme-ace-fg-accent) !important;
}
.ace_cursor{
    color: var(--theme-ace-cursor) !important;
}
.normal-mode .ace_cursor{
    background-color: var(--theme-ace-cursor) !important;
    border: var(--theme-ace-cursor) !important;
}
.ace_marker-layer .ace_selection {
    background: var(--theme-ace-select) !important;
}
.ace_marker-layer .ace_selected-word {
    background: none !important;
    border: none !important;
}
`;

Hints.style('border: solid 3px #321c64; color:#ffffff; background: initial; background-color: #321c64; font-family: Input Sans Condensed, Charcoal, sans-serif');
