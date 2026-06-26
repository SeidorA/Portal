/**
 * Crestone Connections Marquee Widget for WordPress
 * Dynamic, self-contained component to display system integrations in a scrolling marquee.
 * Generated automatically. Do not edit directly.
 */

(function() {
  // SVG Brand Icons Map
  const ICONS = {
  "file": "<svg viewBox=\"0 0 25 25\" width=\"100%\" height=\"100%\" class=\"100%\"><path fill=\"currentColor\" d=\"M22.33,6.98c-.04-.08-.09-.16-.15-.22,0,0,0,0,0,0L15.62.21s-.02-.01-.03-.02c-.06-.06-.13-.1-.2-.14-.09-.04-.18-.06-.28-.06H5.96c-.42,0-.87.08-1.28.25s-.77.41-1.08.72c-.31.31-.56.67-.72,1.08-.17.41-.25.84-.25,1.28v18.34c0,.44.09.87.25,1.28s.41.77.72,1.08c.31.31.68.55,1.08.72.41.17.84.25,1.28.25h13.09c.89,0,1.73-.35,2.35-.98.63-.63.98-1.46.98-2.36V7.26c0-.1-.02-.19-.06-.28ZM15.83,2.44l4.11,4.11h-3.52c-.16,0-.31-.06-.42-.17-.11-.11-.17-.26-.17-.42v-3.51ZM20.39,23.01c-.36.36-.84.56-1.35.56H5.95c-.25,0-.5-.05-.73-.15-.23-.1-.44-.24-.62-.41-.18-.18-.32-.39-.41-.62s-.15-.48-.15-.73V3.33c0-.25.05-.5.15-.73s.24-.44.41-.62c.18-.18.39-.32.62-.41.23-.09.47-.14.72-.14h8.46v4.52c0,.54.21,1.05.59,1.43.38.38.9.59,1.43.59h4.53v13.69c0,.51-.2.99-.56,1.35Z\" /></svg>",
  "SAP": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\"><path d=\"M0 6.22079V18.2208H12.1152L24 6.22079H0ZM14.6496 13.6128H13.8528V15.9072H10.3776L10.0032 14.8128C9.6288 14.9376 9.2544 15.0048 8.784 15.0048C8.3136 15.0048 7.8912 14.928 7.5168 14.8032L7.1904 15.9072H5.0304L5.2608 15.2736C5.2608 15.2736 5.2128 15.3216 5.1648 15.3504C4.6464 15.7824 3.9456 16.0224 3.1488 16.0416H3.0048C2.064 16.0416 1.1232 15.7728 0.3264 15.3216L1.0752 13.8528C1.872 14.3232 2.3424 14.4288 3.0048 14.4192C3.3792 14.4192 3.6192 14.3424 3.8016 14.1792C3.8976 14.0736 3.9456 13.9488 3.9456 13.8048C3.9456 13.4208 3.4272 13.248 2.7744 13.0368C2.208 12.8736 1.6512 12.6432 1.1328 12.2976C0.6144 11.8848 0.336 11.3664 0.336 10.6272C0.336 10.0992 0.5664 9.60959 0.9024 9.23519C1.4208 8.68799 2.2656 8.36159 3.3024 8.36159C4.1472 8.36159 5.184 8.61119 5.9808 9.00479L5.136 10.4544C4.2912 10.0512 3.8688 10.0032 3.3984 9.98399C2.6976 9.94559 2.3616 10.2048 2.3616 10.4736C2.3136 10.8096 3.024 11.1168 3.6288 11.3184C4.6176 11.6256 5.8368 12.0384 6.0288 13.2384L7.8144 8.48639H9.8304L11.8944 14.16V8.48639H14.2464C16.5504 8.48639 17.5776 9.30239 17.5776 11.0688C17.5776 12.6624 16.4928 13.6128 14.6688 13.6128H14.6496ZM14.3712 10.0416H13.8528V11.9712H14.3712C15.072 11.9712 15.6384 11.7408 15.6384 11.0016C15.6384 10.2624 15.072 10.0512 14.3712 10.0512V10.0416ZM8.0352 13.2C8.2656 13.2864 8.5056 13.3344 8.784 13.3344C9.0624 13.3344 9.3024 13.2864 9.5328 13.2096L8.784 10.8096L8.0352 13.2Z\" fill=\"url(#paint0_linear_1590_12074)\" /><defs><linearGradient id=\"paint0_linear_1590_12074\" x1=\"12\" y1=\"6.22079\" x2=\"12\" y2=\"18.2208\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#00A8ED\" /><stop offset=\"1\" stop-color=\"#085EB2\" /></linearGradient></defs></svg>",
  "SapOdata": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 25 25\" class=\"100%\"><path fill=\"currentColor\" d=\"M0,0v25h12.62l12.38-12.5V0H0ZM15.28,20.2h-.85v2.39h-3.62l-.39-1.14c-.39.13-.78.2-1.27.2s-.93-.08-1.32-.21l-.34,1.15h-2.25l.24-.66s-.05.05-.1.08c-.54.45-1.27.7-2.1.72h-.15c-.98,0-1.96-.28-2.79-.75l.78-1.53c.83.49,1.32.6,2.01.59.39,0,.64-.08.83-.25.1-.11.15-.24.15-.39,0-.4-.54-.58-1.22-.8-.59-.17-1.17-.41-1.71-.77-.54-.43-.83-.97-.83-1.74,0-.55.24-1.06.59-1.45.54-.57,1.42-.91,2.5-.91.88,0,1.96.26,2.79.67l-.88,1.51c-.88-.42-1.32-.47-1.81-.49-.73-.04-1.08.23-1.08.51-.05.35.69.67,1.32.88,1.03.32,2.3.75,2.5,2l1.86-4.95h2.1l2.15,5.91v-5.91h2.45c2.4,0,3.47.85,3.47,2.69,0,1.66-1.13,2.65-3.03,2.65ZM13.38,1.5h7.47v1.96h-7.47v-1.96ZM13.38,5.15h7.47v1.96h-7.47v-1.96ZM4.15,1.5h7.47v1.96h-7.47v-1.96ZM11.18,7.99c0,1.83-1.5,3.32-3.34,3.32s-3.34-1.49-3.34-3.32,1.5-3.32,3.34-3.32,3.34,1.49,3.34,3.32ZM8.37,19.77c.24.09.49.14.78.14s.54-.05.78-.13l-.78-2.5-.78,2.49ZM14.97,16.49h0s-.54,0-.54,0v2.01h.54c.73,0,1.32-.24,1.32-1.01s-.59-.99-1.32-.99Z\" /></svg>",
  "SAPHanaC": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 25 25\"><defs><linearGradient id=\"Degradado_sin_nombre_6\" data-name=\"Degradado sin nombre 6\" x1=\"5.82\" y1=\"10.7\" x2=\"5.82\" y2=\"16.3\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#20b4e8\" /><stop offset=\"1\" stop-color=\"#2a68b3\" /></linearGradient></defs><path d=\"M0,10.69v5.82h5.88l5.77-5.82s-11.65,0-11.65,0ZM7.11,14.28h-.39v1.11h-1.69l-.18-.53c-.18.06-.36.09-.59.09s-.43-.04-.61-.1l-.16.54h-1.05l.11-.31s-.02.02-.05.04c-.25.21-.59.33-.98.34h-.07c-.46,0-.91-.13-1.3-.35l.36-.71c.39.23.61.28.94.27.18,0,.3-.04.39-.12.05-.05.07-.11.07-.18,0-.19-.25-.27-.57-.37-.27-.08-.55-.19-.8-.36-.25-.2-.39-.45-.39-.81,0-.26.11-.49.27-.68.25-.27.66-.42,1.16-.42.41,0,.91.12,1.3.31l-.41.7c-.41-.2-.61-.22-.84-.23-.34-.02-.5.11-.5.24-.02.16.32.31.61.41.48.15,1.07.35,1.16.93l.87-2.31h.98l1,2.75v-2.75h1.14c1.12,0,1.62.4,1.62,1.25,0,.77-.53,1.23-1.41,1.23h0ZM6.97,12.55h-.25v.94h.25c.34,0,.61-.11.61-.47s-.27-.46-.61-.46h0ZM3.9,14.08c.11.04.23.07.36.07s.25-.02.36-.06l-.36-1.16-.36,1.16Z\" fill=\"url(#Degradado_sin_nombre_6)\" /><path d=\"M14.65,18.97s-.04,0-.06,0c-.92-.02-1.76-.49-2.52-1.4-.74.39-2.63,1.1-5.2-.05-.2-.09-.29-.33-.2-.53.09-.2.33-.29.53-.2,2.84,1.27,4.71-.05,4.73-.07l.32-.23.24.32c.66.89,1.37,1.35,2.12,1.37,1.26.04,2.28-1.2,2.29-1.21l.26-.32.31.26c1.45,1.22,2.8,0,2.85-.06l.21-.2.25.14s.83.44,1.68.17c.59-.18,1.08-.66,1.46-1.41.3-.6.35-1.15.16-1.69-.45-1.25-2.07-1.96-2.08-1.97l-.18-.08-.05-.19c-.24-.96-.65-1.59-1.24-1.87-.83-.41-1.75,0-1.76,0l-.47.21-.09-.5c-.02-.09-.45-2.26-3.14-2.58-2.68-.32-3.76,2.76-3.8,2.9l-.17.51-.44-.31c-1.99-1.42-3.76.4-3.83.48-.15.16-.4.17-.57.01-.16-.15-.17-.41-.01-.57.74-.78,2.56-1.87,4.46-.84.47-1.01,1.85-3.28,4.46-2.98,2.5.3,3.41,1.99,3.7,2.8.47-.12,1.25-.21,2.01.16.77.37,1.31,1.12,1.61,2.21.5.25,1.86,1.04,2.34,2.34.27.75.21,1.53-.19,2.32-.48.96-1.13,1.57-1.94,1.82-.86.26-1.65.04-2.04-.12-.7.53-2.05,1.05-3.4.14-.44.44-1.41,1.22-2.61,1.22Z\" fill=\"#20ade4\" /><g><path d=\"M10.01,11.77v1.45h1.67v-1.45h.45v3.46h-.45v-1.62h-1.67v1.62h-.45v-3.46h.45Z\" fill=\"#f8941e\" /><path d=\"M12.97,14.14l-.36,1.09h-.46l1.18-3.46h.54l1.18,3.46h-.48l-.37-1.09h-1.23ZM14.1,13.79l-.34-1c-.08-.23-.13-.43-.18-.63h-.01c-.05.21-.11.42-.17.63l-.34,1h1.04Z\" fill=\"#f8941e\" /><path d=\"M15.05,15.22v-3.46h.49l1.11,1.75c.26.41.46.77.62,1.12h.01c-.04-.47-.05-.89-.05-1.43v-1.45h.42v3.46h-.45l-1.1-1.76c-.24-.39-.47-.78-.65-1.15h-.02c.03.44.04.86.04,1.43v1.48h-.42Z\" fill=\"#f8941e\" /><path d=\"M18.49,14.14l-.36,1.09h-.46l1.18-3.46h.54l1.18,3.46h-.48l-.37-1.09h-1.23ZM19.62,13.79l-.34-1c-.08-.23-.13-.43-.18-.63h-.01c-.05.21-.11.42-.17.63l-.34,1h1.04Z\" fill=\"#f8941e\" /></g></svg>",
  "AzureSql": "<svg viewBox=\"0 0 100 100\" width=\"100%\" height=\"100%\"><path fill=\"#088dd7\" d=\"M86.67,52.01c0-10.79-.01-21.57.01-32.36,0-1.6-.51-2.97-1.47-4.22-.81-1.05-1.77-1.93-2.84-2.7-3.44-2.46-7.31-3.98-11.35-5.09-7.73-2.14-15.61-2.82-23.6-2.4-6.82.36-13.49,1.43-19.89,3.88-3.29,1.26-6.42,2.81-8.86,5.46-1.29,1.4-1.93,3.02-1.93,4.96.02,21.39.02,42.78,0,64.18,0,1.87.58,3.45,1.79,4.84,2.46,2.81,5.7,4.42,9.09,5.75,6.62,2.59,13.55,3.7,20.61,4,7.49.31,14.91-.28,22.19-2.16,4.53-1.17,8.91-2.71,12.68-5.61,2.33-1.8,3.65-4,3.61-7.16-.13-10.45-.05-20.9-.05-31.36ZM38.3,63.57c-3.26,1.5-6.63,1.27-9.98.22-.35-.11-.47-.32-.47-.68.01-1.46,0-2.92,0-4.58,1.6.98,3.11,1.65,4.81,1.82.09,0,.18.04.27.04,1.05.06,1.87-.34,2.07-1,.2-.69-.22-1.36-1.26-1.87-.76-.37-1.56-.68-2.33-1.03-2.72-1.21-4.06-3.29-3.83-5.92.21-2.43,2.1-4.43,4.85-5.04,2.45-.54,4.9-.4,7.32.2.46.11.63.32.62.81-.03,1.31-.01,2.62-.01,4.04-1.01-.34-1.93-.79-2.92-.99-.85-.17-1.69-.27-2.53-.09-.58.12-1.14.35-1.27,1.02-.14.72.34,1.16.89,1.45.78.41,1.6.73,2.4,1.1,1.77.82,3.41,1.8,4.13,3.77.94,2.56-.21,5.54-2.76,6.71ZM56.01,69.07c-.45,0-.73-.16-1.02-.47-1.04-1.15-2.12-2.27-3.16-3.43-.34-.38-.7-.6-1.23-.67-4.89-.67-8.15-4.53-7.99-9.51.12-3.98,1.63-7.24,5.43-8.89,5.77-2.52,13.15.24,13.4,8.22.13,4.08-1.35,7.3-5.11,9.37,2.05,1.75,4.06,3.48,6.27,5.37-2.39,0-4.5-.01-6.6.01ZM76.26,63.62c.03.59-.2.7-.74.7-3.53-.02-7.07-.03-10.6,0-.68,0-.79-.23-.78-.84.03-2.86.01-5.73.01-8.59s.01-5.79-.01-8.68c0-.53.1-.75.69-.73,1.4.05,2.8.05,4.2,0,.65-.02.81.17.8.81-.03,4.23,0,8.47-.03,12.7,0,.75.23.91.92.89,1.58-.05,3.17,0,4.75-.03.57-.01.82.11.79.74-.05,1-.05,2.01,0,3.01ZM75.04,20.4c-1.73,1.42-3.79,2.16-5.9,2.79-4.55,1.35-9.23,1.9-13.95,2.1-7.06.29-14.06-.13-20.89-2.09-2.2-.63-4.35-1.41-6.12-2.94-1.87-1.62-1.84-3.51.09-5.09,2.26-1.84,4.98-2.64,7.73-3.32,5.14-1.28,10.38-1.72,15.11-1.69,6.36-.02,12.11.48,17.72,2.07,2.23.63,4.42,1.4,6.24,2.91,2.05,1.7,2.04,3.57-.03,5.26ZM52.29,50.04c-1.48-.05-2.54.64-3.09,1.96-.83,1.96-.84,3.99.04,5.93,1.03,2.29,3.96,2.49,5.41.43.71-1.02.82-2.2.89-3.34-.02-1.02-.14-1.99-.53-2.89-.51-1.19-1.31-2.04-2.71-2.08Z\" /></svg>",
  "MSSQL": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\"><defs><linearGradient id=\"deg_5\" data-name=\"Degradado sin nombre 5\" x1=\"4.76\" y1=\"4.51\" x2=\"6.47\" y2=\"5.52\" gradientTransform=\"translate(0 26) scale(1 -1)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#909ca9\" /><stop offset=\"1\" stop-color=\"#ededee\" /></linearGradient><linearGradient id=\"deg_4\" data-name=\"Degradado sin nombre 4\" x1=\"4.8\" y1=\"23.59\" x2=\"6.17\" y2=\"23.59\" gradientTransform=\"translate(0 26) scale(1 -1)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#939fab\" /><stop offset=\"1\" stop-color=\"#dcdee1\" /></linearGradient><radialGradient id=\"deg_3\" data-name=\"Degradado sin nombre 3\" cx=\"1.06\" cy=\"24.74\" fx=\"1.06\" fy=\"24.74\" r=\".99\" gradientTransform=\"translate(26.89 -79.22) rotate(-171.46) scale(1.8 -3.61)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#ee352c\" /><stop offset=\"1\" stop-color=\"#a91d22\" /></radialGradient></defs><path fill=\"url(#deg_5)\" d=\"M14.84,11.22l-4.74,1.55-4.12,1.82-1.15.3c-.29.28-.6.56-.93.85-.37.32-.71.6-.97.81-.29.23-.72.66-.94.93-.33.41-.58.84-.69,1.17-.2.6-.1,1.21.28,1.77.49.72,1.46,1.45,2.59,1.94.58.25,1.55.58,2.28.76,1.21.31,3.56.64,4.86.69.26.01.61.01.63,0,.03-.02.23-.4.46-.88.8-1.62,1.37-3.14,1.68-4.44.19-.79.33-1.84.43-3.08.03-.35.04-1.51.01-1.91-.03-.64-.09-1.17-.18-1.68-.01-.08-.02-.14-.01-.15.01-.01.06-.03.64-.19l-.12-.28h0s0,0,0,0h0ZM13.76,11.85s.16,1.1.19,1.79c0,.15,0,.24,0,.24-.03,0-.61-.34-1.02-.6-.36-.23-1.04-.68-1.15-.76-.04-.03-.03-.03.26-.13.5-.17,1.68-.55,1.72-.55ZM11.34,12.64s.11.05.31.17c.74.46,1.74,1.02,2.17,1.21.13.06.15.04-.16.24-.65.44-1.46.88-2.46,1.32-.18.08-.32.14-.33.14,0,0,.01-.09.04-.2.24-.89.38-1.79.38-2.52q0-.36.04-.37s0,0,0,0ZM10.85,12.83s0,.82-.02,1.04c-.06.52-.16,1.01-.33,1.56-.04.13-.08.24-.08.25-.01.02-.51-.46-.67-.65-.28-.32-.5-.64-.66-.96-.08-.16-.21-.48-.2-.49.06-.04,1.94-.77,1.96-.76ZM8.5,13.75s0,0,.01,0c0,0,.03.06.05.13.11.31.37.77.59,1.06.24.32.56.67.83.89.09.07.16.14.18.15.02.02.03.02-.56.24-.68.26-1.41.52-2.26.79-.2.07-.4.13-.61.2-.03.01-.02,0,.07-.15.42-.66,1.06-1.94,1.41-2.85.06-.16.12-.32.13-.35.01-.05.03-.07.08-.09.03,0,.05-.01.06-.01ZM7.79,14.05s-.17.39-.35.74c-.35.68-.73,1.34-1.24,2.15-.09.14-.17.27-.18.28-.02.03-.03.02-.08-.09-.12-.24-.22-.55-.28-.83-.05-.28-.04-.77.02-1.07.05-.22.04-.22.15-.27.46-.23,1.94-.93,1.96-.91ZM13.97,14.3v.15c0,.8-.09,1.89-.21,2.69-.02.14-.04.25-.04.26,0,0-.1-.03-.23-.06-.54-.17-1.12-.42-1.65-.71-.35-.19-.85-.5-.84-.52,0,0,.15-.08.33-.18.7-.37,1.38-.76,1.96-1.15.22-.15.55-.38.62-.45l.06-.04ZM5.08,15.36s.01.03-.01.16c-.01.09-.03.27-.04.38-.03.52.06.91.32,1.44.07.15.13.27.13.27-.03.02-2.4.72-3.14.92-.22.06-.42.11-.43.12-.03,0-.03,0-.02-.06.08-.53.48-1.21,1.04-1.79.37-.39.67-.61,1.18-.9.37-.21.93-.52.97-.53,0,0,0,0,0,0ZM10.67,16.36s.09.04.19.1c.77.44,1.83.86,2.74,1.07l.08.02-.11.06c-.48.27-2.04.92-3.64,1.52-.23.09-.46.17-.51.19-.04.02-.08.03-.08.03s.06-.13.15-.28c.45-.84.9-1.86,1.13-2.57.03-.07.05-.13.05-.13ZM10.1,16.55s-.03.08-.06.16c-.31.76-.72,1.58-1.24,2.5-.13.24-.24.43-.25.43s-.11-.06-.24-.14c-.76-.47-1.43-1.04-1.87-1.59l-.06-.08.33-.09c1.17-.32,2.16-.66,3.14-1.09.14-.06.25-.1.26-.1ZM13.64,17.78c0,.08-.18.82-.33,1.35-.13.45-.23.8-.43,1.42-.09.27-.16.5-.16.5s-.03,0-.05-.01c-1.06-.19-2.02-.46-2.91-.82-.25-.1-.61-.26-.63-.28,0,0,.21-.11.48-.23,1.63-.71,3.32-1.52,3.9-1.87.07-.04.12-.06.13-.06ZM5.47,18.06s-.45.66-1.09,1.55c-.22.31-.48.68-.58.81-.1.14-.24.35-.33.48l-.15.23-.16-.14c-.19-.16-.52-.49-.67-.68-.31-.38-.52-.79-.6-1.16-.04-.17-.04-.26,0-.27.05-.01,1.01-.24,1.91-.45.5-.11,1.07-.25,1.28-.3.21-.05.38-.09.38-.09ZM5.93,18.24l.11.13c.52.58,1.04,1,1.68,1.38.11.06.2.12.19.13-.03.02-2.21.8-3.23,1.15-.57.2-1.04.36-1.04.36s-.04-.02-.07-.05l-.06-.05.1-.15c.34-.49.76-1.02,1.68-2.13l.63-.76ZM8.79,20.28s.16.05.35.13c.47.18.83.29,1.33.41.61.15,1.49.3,2.01.35.08,0,.12.01.11.03-.03.01-.55.19-.94.31-.62.19-2.5.75-4.03,1.19-.28.08-.53.15-.54.15-.04,0-.15-.03-.15-.04,0,0,.09-.12.19-.24.52-.62,1.03-1.3,1.45-1.96.12-.18.22-.33.22-.33ZM8.16,20.3s-.25.41-.69,1.11c-.19.3-.4.63-.48.75-.07.11-.18.29-.24.39l-.1.18h-.05c-.13-.05-1.04-.37-1.28-.47-.3-.12-.61-.26-.83-.38-.29-.15-.64-.38-.62-.39,0,0,.5-.14,1.09-.3,1.57-.43,2.44-.67,3.01-.85.1-.03.19-.06.2-.05ZM12.62,21.35h0s-.57,1.65-.78,2.16c-.05.11-.06.14-.09.14-.06,0-.9-.12-1.41-.2-.89-.14-2.39-.4-2.76-.48l-.09-.02.53-.12c1.15-.26,1.7-.4,2.26-.57.71-.21,1.4-.48,2.11-.81.11-.05.2-.09.23-.09Z\" /><path fill=\"url(#deg_4)\" d=\"M9.95.17c-.08-.01-1.35.45-2.17.78-1.11.45-1.97.88-2.5,1.25-.2.14-.44.39-.48.48-.01.04-.02.08-.02.12l.48.45,1.14.37,2.72.49,3.11.53.03-.27s-.02,0-.03,0l-.41-.06-.08-.15c-.42-.74-.89-1.67-1.16-2.29-.21-.48-.41-1.04-.52-1.44-.06-.24-.07-.26-.11-.26h0s0,0,0,0h0ZM9.9.35h0s.02.1.03.22c.06.5.17.98.35,1.51.13.39.13.37-.02.33-.37-.1-2-.38-3.19-.55-.19-.03-.35-.05-.35-.05-.01-.01.86-.47,1.24-.65.49-.23,1.84-.79,1.94-.81ZM6.44,1.96l.14.05c.76.26,2.67.62,3.72.71.12.01.22.02.22.02,0,0-.1.06-.23.12-.51.25-1.07.57-1.45.81-.11.07-.22.13-.23.13s-.09-.01-.17-.03l-.14-.02-.36-.35c-.63-.61-1.12-1.09-1.31-1.26l-.19-.17ZM6.3,2.07l.5.63c.28.35.56.69.62.76.06.08.11.14.11.14-.01.01-.73-.13-1.11-.21-.39-.09-.55-.13-.79-.21l-.2-.06v-.05c0-.24.31-.6.82-.96l.05-.03ZM10.59,2.93s.03.03.08.13c.12.27.5.99.59,1.13.03.05.08.05-.43-.03-1.21-.2-1.6-.26-1.6-.27,0,0,.04-.03.08-.05.38-.21.76-.47,1.09-.76.08-.07.16-.13.17-.14,0,0,.01-.01.01,0Z\" /><path fill=\"url(#deg_3)\" d=\"M4.83,2.64s-.08.13,0,.31c.05.11.18.25.34.4,0,0,1.59,1.55,1.79,1.78.88,1.02,1.26,2.02,1.3,3.4.02.89-.15,1.67-.57,2.58-.74,1.63-2.32,3.42-4.74,5.41l.35-.12c.23-.17.54-.35,1.27-.76,1.69-.92,3.59-1.77,5.91-2.65,3.35-1.26,8.86-2.74,12-3.22l.33-.05-.05-.08c-.29-.44-.48-.72-.72-1.01-.69-.85-1.52-1.54-2.54-2.12-1.4-.78-3.22-1.4-5.52-1.85-.43-.09-1.39-.25-2.16-.37-1.64-.25-2.7-.43-3.87-.63-.42-.07-1.05-.18-1.46-.27-.21-.05-.63-.14-.95-.25-.26-.1-.63-.2-.71-.51ZM5.75,3.53s.06.02.14.04c.14.05.31.1.52.16.16.04.31.09.47.13.21.05.39.1.4.1.03.03.39,1.18.51,1.63.05.17.08.31.08.31,0,0-.04-.06-.09-.14-.42-.74-1.08-1.49-1.85-2.09-.1-.07-.18-.14-.18-.14ZM7.52,4.02s.1.01.19.03c.61.14,1.7.34,2.4.46.12.02.21.04.21.05s-.04.03-.1.06c-.12.06-.59.34-.75.45-.4.27-.76.55-1.01.81-.1.1-.19.19-.19.19,0,0-.02-.06-.04-.14-.13-.5-.4-1.24-.64-1.75-.04-.08-.07-.16-.07-.16,0,0,0,0,0,0ZM10.62,4.61s.06.13.13.4c.13.52.19,1.1.17,1.64,0,.15-.01.29-.02.31v.04s-.2-.06-.2-.06c-.38-.12-1.01-.3-1.54-.45-.3-.08-.55-.16-.55-.16,0-.02.44-.47.63-.63.36-.32,1.34-1.08,1.38-1.07ZM10.86,4.65s1.48.24,2.15.37c.5.1,1.22.25,1.26.27.02,0-.05.05-.29.16-.95.43-1.65.81-2.35,1.28-.18.12-.34.22-.34.22s0-.1,0-.23c0-.68-.14-1.37-.39-1.95-.03-.06-.05-.11-.04-.11ZM14.67,5.4s-.04.3-.08.47c-.13.53-.48,1.33-.9,2.07-.08.13-.14.24-.15.24,0,0-.1-.05-.21-.11-.42-.24-.89-.47-1.4-.69-.14-.06-.27-.11-.27-.12-.03-.02,1.13-.78,1.74-1.15.48-.29,1.27-.73,1.29-.72ZM14.94,5.44s.68.18,1.02.28c.84.25,1.81.61,2.44.89l.26.12-.18.04c-1.54.35-2.86.76-4.13,1.28-.1.04-.2.08-.2.08s.03-.08.08-.18c.38-.81.63-1.66.69-2.39,0-.07.01-.12.03-.12ZM8.45,6.93s.51.11.78.18c.41.11,1.28.4,1.28.43,0,0-.1.09-.21.19-.47.39-.92.8-1.46,1.33-.16.15-.3.28-.3.28s-.01-.02,0-.05c.08-.6.06-1.38-.05-2.16-.01-.1-.02-.19-.02-.19ZM18.92,6.94s-.23.38-.38.59c-.21.31-.53.72-1.24,1.61-.38.47-.8,1.01-.94,1.19-.14.18-.26.33-.27.33s-.05-.06-.1-.14c-.4-.6-.88-1.13-1.45-1.6-.11-.09-.23-.19-.27-.21-.04-.03-.07-.06-.07-.06,0-.01.61-.27,1.07-.46.81-.33,1.91-.72,2.74-.98.43-.14.9-.27.9-.26ZM19.19,7.01s.1.04.2.1c.87.5,1.72,1.14,2.4,1.8.19.19.66.67.65.68,0,0-.16.01-.36.03-1.51.11-3.44.43-5.29.88-.13.03-.24.05-.24.05s.13-.14.31-.31c1.09-1.05,1.59-1.71,2.17-2.89.08-.18.15-.33.16-.34t0,0ZM11.22,7.83c.05.01.52.23.87.4.32.16.81.42.83.44,0,0-.17.09-.38.2-.67.34-1.25.66-1.85,1.02-.17.1-.32.19-.32.19-.01,0-.01-.01.09-.19.32-.59.58-1.29.73-1.97.01-.05.03-.09.04-.09ZM10.75,7.92s-.11.45-.19.69c-.15.45-.39,1.02-.63,1.45-.06.1-.14.25-.19.33l-.09.14-.2-.19c-.23-.23-.42-.37-.67-.49-.1-.05-.17-.09-.17-.1,0-.03.61-.58,1.08-.98.34-.29,1.05-.86,1.06-.85ZM13.6,9.09l.18.11c.4.26.87.61,1.24.91.2.17.6.52.68.61l.04.05-.29.08c-1.64.45-2.91.86-4.39,1.4-.16.06-.3.11-.32.11-.02,0-.04.02.33-.32.95-.87,1.78-1.83,2.41-2.76l.13-.19ZM12.85,9.27s-.48.7-.78,1.09c-.35.47-.97,1.25-1.4,1.75-.18.21-.33.39-.34.39-.01,0-.01-.05-.01-.13,0-.43-.11-.9-.3-1.29-.08-.16-.1-.2-.08-.22.07-.06,1.11-.66,1.77-1.01.44-.24,1.14-.59,1.15-.58ZM8.32,10.38s.09.04.19.09c.23.13.43.27.62.42,0,0-.09.08-.21.17-.34.24-.86.63-1.16.87-.32.25-.33.26-.29.2.24-.36.35-.57.48-.83.11-.23.22-.51.3-.75.03-.1.06-.18.07-.18ZM9.53,11.33s.04.03.14.17c.2.3.36.71.4,1.04v.07s-.48.19-.48.19c-.88.34-1.69.68-2.24.93-.15.07-.42.2-.6.29-.18.09-.32.16-.32.15s.11-.09.25-.19c1.07-.78,2-1.63,2.69-2.48.08-.09.14-.17.15-.18h0ZM8.97,11.47s-.39.48-.67.76c-.69.71-1.38,1.26-2.22,1.79-.11.07-.2.13-.21.14-.03.01,0-.02.38-.43.24-.25.42-.47.62-.73.14-.18.16-.2.36-.34.53-.38,1.74-1.2,1.75-1.19ZM10.6041 1.63265C13.102 1.63265 15.3633 2.66122 16.9959 4.31837L18.1878 3.2C16.2612 1.22449 13.5755 0 10.6041 0C4.75102 0 0 4.75102 0 10.6041H1.63265C1.63265 5.65714 5.65714 1.63265 10.6041 1.63265ZM10.6041 19.5756C5.65714 19.5756 1.63265 15.5511 1.63265 10.6041H0C0 16.4654 4.75102 21.2082 10.6041 21.2082C13.249 21.2082 15.6653 20.2286 17.5265 18.6286L16.3592 17.4776C14.8 18.7837 12.7918 19.5756 10.6041 19.5756Z\" fill=\"#FBBC04\" />",
  "Fabric": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g><g><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M0.984 16.5594L0.632502 17.8459C0.501503 18.2574 0.318005 18.8619 0.219006 19.3999C0.0780065 19.7719 0.00100708 20.1754 0.00100708 20.5969C0.00100708 22.3349 1.314 23.7658 3.00199 23.9528C3.47698 24.0214 4.01448 24.0178 4.61697 23.9293L7.38495 23.5474C8.08094 23.4514 8.65244 22.9489 8.83744 22.2709L10.7424 15.2739L0.984 16.5594Z\" fill=\"url(#paint0_linear_4228_371)\" /><path d=\"M3.68383 16.8909C0.766353 17.3428 0.167358 19.5444 0.167358 19.5444L2.96134 9.27845L17.5607 7.30347L15.5697 14.5349C15.4662 14.9224 15.1407 15.2194 14.7372 15.2809L14.6558 15.2944L3.60183 16.9049L3.68383 16.8909Z\" fill=\"url(#paint1_linear_4228_371)\" /><path d=\"M3.68383 16.8909C0.766353 17.3428 0.167358 19.5444 0.167358 19.5444L2.96134 9.27845L17.5607 7.30347L15.5697 14.5349C15.4662 14.9224 15.1407 15.2194 14.7372 15.2809L14.6558 15.2944L3.60183 16.9049L3.68383 16.8909Z\" fill=\"url(#paint2_linear_4228_371)\" fill-opacity=\"0.8\" /><path d=\"M5.33936 10.3409L21.5017 7.95344C21.8862 7.90094 22.1977 7.61944 22.2957 7.25094L23.9637 1.21449C23.9867 1.13249 23.9987 1.04599 23.9987 0.956991C23.9987 0.428497 23.5707 0 23.0417 0C23.0007 0 22.9597 0.00249998 22.9202 0.00749994L7.49835 2.28648C5.82335 2.55548 4.47087 3.79097 4.03188 5.40246L1.80789 13.4629C2.25439 11.8324 2.52889 10.8494 5.33936 10.3409Z\" fill=\"url(#paint3_linear_4228_371)\" /><path d=\"M5.33936 10.3409L21.5017 7.95344C21.8862 7.90094 22.1977 7.61944 22.2957 7.25094L23.9637 1.21449C23.9867 1.13249 23.9987 1.04599 23.9987 0.956991C23.9987 0.428497 23.5707 0 23.0417 0C23.0007 0 22.9597 0.00249998 22.9202 0.00749994L7.49835 2.28648C5.82335 2.55548 4.47087 3.79097 4.03188 5.40246L1.80789 13.4629C2.25439 11.8324 2.52889 10.8494 5.33936 10.3409Z\" fill=\"url(#paint4_linear_4228_371)\" /><path d=\"M5.33936 10.3409L21.5017 7.95344C21.8862 7.90094 22.1977 7.61944 22.2957 7.25094L23.9637 1.21449C23.9867 1.13249 23.9987 1.04599 23.9987 0.956991C23.9987 0.428497 23.5707 0 23.0417 0C23.0007 0 22.9597 0.00249998 22.9202 0.00749994L7.49835 2.28648C5.82335 2.55548 4.47087 3.79097 4.03188 5.40246L1.80789 13.4629C2.25439 11.8324 2.52889 10.8494 5.33936 10.3409Z\" fill=\"url(#paint5_linear_4228_371)\" /><path d=\"M5.33936 10.3409L21.5017 7.95344C21.8862 7.90094 22.1977 7.61944 22.2957 7.25094L23.9637 1.21449C23.9867 1.13249 23.9987 1.04599 23.9987 0.956991C23.9987 0.428497 23.5707 0 23.0417 0C23.0007 0 22.9597 0.00249998 22.9202 0.00749994L7.49835 2.28648C5.82335 2.55548 4.47087 3.79097 4.03188 5.40246L1.80789 13.4629C2.25439 11.8324 2.52889 10.8494 5.33936 10.3409Z\" fill=\"url(#paint6_linear_4228_371)\" /><path d=\"M5.33936 10.3409L21.5017 7.95344C21.8862 7.90094 22.1977 7.61944 22.2957 7.25094L23.9637 1.21449C23.9867 1.13249 23.9987 1.04599 23.9987 0.956991C23.9987 0.428497 23.5707 0 23.0417 0C23.0007 0 22.9597 0.00249998 22.9202 0.00749994L7.49835 2.28648C5.82335 2.55548 4.47087 3.79097 4.03188 5.40246L1.80789 13.4629C2.25439 11.8324 2.52889 10.8494 5.33936 10.3409Z\" fill=\"url(#paint7_linear_4228_371)\" /><path d=\"M5.33936 10.3409L21.5017 7.95344C21.8862 7.90094 22.1977 7.61944 22.2957 7.25094L23.9637 1.21449C23.9867 1.13249 23.9987 1.04599 23.9987 0.956991C23.9987 0.428497 23.5707 0 23.0417 0C23.0007 0 22.9597 0.00249998 22.9202 0.00749994L7.49835 2.28648C5.82335 2.55548 4.47087 3.79097 4.03188 5.40246L1.80789 13.4629C2.25439 11.8324 2.52889 10.8494 5.33936 10.3409Z\" fill=\"url(#paint8_linear_4228_371)\" /><path d=\"M5.33936 10.3409L21.5017 7.95344C21.8862 7.90094 22.1977 7.61944 22.2957 7.25094L23.9637 1.21449C23.9867 1.13249 23.9987 1.04599 23.9987 0.956991C23.9987 0.428497 23.5707 0 23.0417 0C23.0007 0 22.9597 0.00249998 22.9202 0.00749994L7.49835 2.28648C5.82335 2.55548 4.47087 3.79097 4.03188 5.40246L1.80789 13.4629C2.25439 11.8324 2.52889 10.8494 5.33936 10.3409Z\" fill=\"url(#paint9_linear_4228_371)\" fill-opacity=\"0.4\" /><path d=\"M5.33932 10.3415C2.99884 10.765 2.41784 11.519 2.03084 12.7005L0.167358 19.5459C0.167358 19.5459 0.762854 17.3664 3.64483 16.9004L14.6562 15.2964L14.7378 15.2829C15.1413 15.2214 15.4668 14.924 15.5703 14.537L17.2082 8.58801L5.33982 10.3415H5.33932Z\" fill=\"url(#paint10_linear_4228_371)\" /><path d=\"M5.33932 10.3415C2.99884 10.765 2.41784 11.519 2.03084 12.7005L0.167358 19.5459C0.167358 19.5459 0.762854 17.3664 3.64483 16.9004L14.6562 15.2964L14.7378 15.2829C15.1413 15.2214 15.4668 14.924 15.5703 14.537L17.2082 8.58801L5.33982 10.3415H5.33932Z\" fill=\"url(#paint11_linear_4228_371)\" fill-opacity=\"0.2\" /><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M3.64498 16.9005C1.2095 17.2946 0.409504 18.9075 0.219006 19.3991C0.0780065 19.772 0.00100708 20.1755 0.00100708 20.597C0.00100708 22.335 1.314 23.766 3.00199 23.953C3.47698 24.0215 4.01448 24.018 4.61697 23.9295L7.38495 23.5475C8.08094 23.4515 8.65244 22.949 8.83744 22.271L10.574 15.8916L3.64548 16.9011L3.64498 16.9005Z\" fill=\"url(#paint12_linear_4228_371)\" /></g></g><defs><linearGradient id=\"paint0_linear_4228_371\" x1=\"5.37146\" y1=\"24.0004\" x2=\"5.37146\" y2=\"15.2739\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0.056\" stop-color=\"#2AAC94\" /><stop offset=\"0.155\" stop-color=\"#239C87\" /><stop offset=\"0.372\" stop-color=\"#177E71\" /><stop offset=\"0.588\" stop-color=\"#0E6961\" /><stop offset=\"0.799\" stop-color=\"#095D57\" /><stop offset=\"1\" stop-color=\"#085954\" /></linearGradient><linearGradient id=\"paint1_linear_4228_371\" x1=\"16.3984\" y1=\"17.6685\" x2=\"7.9718\" y2=\"8.50346\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0.0417478\" stop-color=\"#ABE88E\" /><stop offset=\"0.548926\" stop-color=\"#2AAA92\" /><stop offset=\"0.906\" stop-color=\"#117865\" /></linearGradient><linearGradient id=\"paint2_linear_4228_371\" x1=\"-4.30931\" y1=\"17.2229\" x2=\"3.70979\" y2=\"14.4883\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#6AD6F9\" /><stop offset=\"1\" stop-color=\"#6AD6F9\" stop-opacity=\"0\" /></linearGradient><linearGradient id=\"paint3_linear_4228_371\" x1=\"1.80789\" y1=\"6.73145\" x2=\"23.1532\" y2=\"6.73145\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0.043\" stop-color=\"#25FFD4\" /><stop offset=\"0.874\" stop-color=\"#55DDB9\" /></linearGradient><linearGradient id=\"paint4_linear_4228_371\" x1=\"10.0238\" y1=\"0.928993\" x2=\"14.6013\" y2=\"10.7449\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#F4E084\" stop-opacity=\"0.6\" /><stop offset=\"0.534\" stop-color=\"#F4E084\" stop-opacity=\"0\" /></linearGradient><linearGradient id=\"paint5_linear_4228_371\" x1=\"17.6402\" y1=\"-5.18101\" x2=\"23.8106\" y2=\"4.29703\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#ABF5E2\" /><stop offset=\"1\" stop-color=\"#4EE6BD\" /></linearGradient><linearGradient id=\"paint6_linear_4228_371\" x1=\"12.9033\" y1=\"0\" x2=\"12.9033\" y2=\"13.4629\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#1F937E\" /><stop offset=\"1\" stop-color=\"#9EE09F\" /></linearGradient><linearGradient id=\"paint7_linear_4228_371\" x1=\"12.9033\" y1=\"0\" x2=\"12.9033\" y2=\"13.4629\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#1F937E\" /><stop offset=\"1\" stop-color=\"#C0ECC7\" /></linearGradient><linearGradient id=\"paint8_linear_4228_371\" x1=\"1.80789\" y1=\"3.74797\" x2=\"21.0358\" y2=\"12.6765\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#6AD6F9\" /><stop offset=\"0.229501\" stop-color=\"#60E9D0\" /><stop offset=\"0.650711\" stop-color=\"#6DE9BB\" /><stop offset=\"0.99354\" stop-color=\"#ABE88E\" /></linearGradient><linearGradient id=\"paint9_linear_4228_371\" x1=\"3.58669\" y1=\"5.41875\" x2=\"14.042\" y2=\"7.73119\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"white\" stop-opacity=\"0\" /><stop offset=\"0.458511\" stop-color=\"white\" /><stop offset=\"1\" stop-color=\"white\" stop-opacity=\"0\" /></linearGradient><linearGradient id=\"paint10_linear_4228_371\" x1=\"7.05347\" y1=\"14.3757\" x2=\"7.30052\" y2=\"7.0437\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0.204642\" stop-color=\"#063D3B\" stop-opacity=\"0\" /><stop offset=\"0.58553\" stop-color=\"#063D3B\" stop-opacity=\"0.236587\" /><stop offset=\"0.872285\" stop-color=\"#063D3B\" stop-opacity=\"0.75\" /></linearGradient><linearGradient id=\"paint11_linear_4228_371\" x1=\"-0.714185\" y1=\"13.6465\" x2=\"8.22057\" y2=\"15.3269\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"white\" stop-opacity=\"0\" /><stop offset=\"0.458511\" stop-color=\"white\" /><stop offset=\"1\" stop-color=\"white\" stop-opacity=\"0\" /></linearGradient><linearGradient id=\"paint12_linear_4228_371\" x1=\"5.73997\" y1=\"21.5825\" x2=\"3.99712\" y2=\"13.0587\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0.064\" stop-color=\"#063D3B\" stop-opacity=\"0\" /><stop offset=\"0.17\" stop-color=\"#063D3B\" stop-opacity=\"0.135\" /><stop offset=\"0.562\" stop-color=\"#063D3B\" stop-opacity=\"0.599\" /><stop offset=\"0.85\" stop-color=\"#063D3B\" stop-opacity=\"0.9\" /><stop offset=\"1\" stop-color=\"#063D3B\" /></linearGradient><clipPath id=\"clip0_4228_371\"><rect width=\"100%\" height=\"100%\" fill=\"white\" /></clipPath></defs></svg>"
  };

  // Fallback Connections JSON Data
  const FALLBACK_DATA = {
    "origins": [
      {
        "id": "sap4hanna",
        "title": "SAP HANA",
        "description": "Create a source with SAP HANA",
        "iconName": "SAP",
        "useBrand": true,
        "link": "/docs/documentation/sections/conections/source/sap4hanna"
      },
      {
        "id": "sapabap",
        "title": "SAP ABAP",
        "description": "Create a node to extract data from a source and load it into a destination.",
        "iconName": "SAP",
        "useBrand": true,
        "link": "/docs/documentation/sections/conections/source/sapabap"
      },
      {
        "id": "sapodata",
        "title": "SAP OData",
        "description": "Create a node to extract data from a source and load it into a destination.",
        "iconName": "SapOdata",
        "useBrand": false,
        "link": "/docs/documentation/sections/conections/source/sapodata"
      },
      {
        "id": "erp",
        "title": "ODATA SAP ERP",
        "description": "Create a node to extract data from a source and load it into a destination.",
        "iconName": "SAP",
        "useBrand": true,
        "link": "/docs/documentation/sections/conections/source/erp"
      },
      {
        "id": "businessone",
        "title": "ODATA SAP Business One",
        "description": "Create a node to extract data from a source and load it into a destination.",
        "iconName": "SAP",
        "useBrand": true,
        "link": "/docs/documentation/sections/conections/source/businessone"
      },
      {
        "id": "bydesign",
        "title": "ODATA SAP ByDesign",
        "description": "Create a node to extract data from a source and load it into a destination.",
        "iconName": "SAP",
        "useBrand": true,
        "link": "/docs/documentation/sections/conections/source/bydesign"
      },
      {
        "id": "publice",
        "title": "SAP S/4HANA Cloud Public Edition",
        "description": "Create a node to extract data from a source and load it into a destination.",
        "iconName": "SAPHanaC",
        "useBrand": true,
        "link": "/docs/documentation/sections/conections/source/publice"
      },
      {
        "id": "azuresql",
        "title": " Azure SQL",
        "description": " Azure SQL Connection",
        "iconName": "AzureSql",
        "useBrand": true,
        "link": "/docs/documentation/sections/conections/source/azuresql"
      },
      {
        "id": "ms",
        "title": "MS SQL Server",
        "description": "MS SQL Server Connection",
        "iconName": "MSSQL",
        "useBrand": true,
        "link": "/docs/documentation/sections/conections/source/ms"
      },
      {
        "id": "dynamics-source",
        "title": "Microsoft Dynamics 365 Source Connection",
        "description": "Create a node to extract data from a source and load it into a destination.",
        "iconName": "Dynamics",
        "useBrand": true,
        "link": "/docs/documentation/sections/conections/source/dynamics-source"
      },
      {
        "id": "mysql-source",
        "title": "MySQL Source Connection",
        "description": "Create a node to extract data from a source and load it into a destination.",
        "iconName": "mySQL",
        "useBrand": true,
        "link": "/docs/documentation/sections/conections/source/mysql-source"
      },
      {
        "id": "oracle-source",
        "title": "Oracle Source Connection",
        "description": "Create a node to extract data from a source and load it into a destination.",
        "iconName": "Oracle",
        "useBrand": true,
        "link": "/docs/documentation/sections/conections/source/oracle-source"
      },
      {
        "id": "postgresql-source",
        "title": "PostgreSQL Source Connection",
        "description": "Create a connection to a PostgreSQL database.",
        "iconName": "PostgreSQL",
        "useBrand": true,
        "link": "/docs/documentation/sections/conections/source/postgresql-source"
      }
    ],
    "destinations": [
      {
        "id": "aws",
        "title": "Amazon S3",
        "description": "Create a destination to connect to AWS.",
        "iconName": "S3",
        "useBrand": false,
        "link": "/docs/documentation/sections/conections/detinations/aws"
      },
      {
        "id": "redshift",
        "title": "Amazon Redshift",
        "description": "",
        "iconName": "AmazonRedshift",
        "useBrand": true,
        "link": "/docs/documentation/sections/conections/detinations/redshift"
      },
      {
        "id": "snowflake",
        "title": "Snowflake",
        "description": "Create a node to export data from a source and load it into a destination.",
        "iconName": "Snowflake",
        "useBrand": true,
        "link": "/docs/documentation/sections/conections/detinations/snowflake"
      },
      {
        "id": "Azure",
        "title": "Azure Storage",
        "description": "Create a destination to export data to Azure.",
        "iconName": "Azure",
        "useBrand": true,
        "link": "/docs/documentation/sections/conections/detinations/Azure"
      },
      {
        "id": "AzureSQL",
        "title": "Azure SQL Server",
        "description": "Create a destination to load data into a destination.",
        "iconName": "AzureSql",
        "useBrand": true,
        "link": "/docs/documentation/sections/conections/detinations/AzureSQL"
      },
      {
        "id": "teradata",
        "title": "Teradata",
        "description": "Create a node to extract data from a source and load it into a destination.",
        "iconName": "Teradata",
        "useBrand": true,
        "link": "/docs/documentation/sections/conections/detinations/teradata"
      },
      {
        "id": "databricks",
        "title": "Databricks",
        "description": "Create a node to export data from a source and load it into a destination.",
        "iconName": "Databricks",
        "useBrand": true,
        "link": "/docs/documentation/sections/conections/detinations/databricks"
      },
      {
        "id": "gcp",
        "title": "Google Cloud Platform",
        "description": "Create a node to export data from a source and load it into a destination.",
        "iconName": "GoogleStorage",
        "useBrand": true,
        "link": "/docs/documentation/sections/conections/detinations/gcp"
      },
      {
        "id": "gcs",
        "title": "Google Cloud Big Query",
        "description": "Create a node to export data from a source and load it into a destination.",
        "iconName": "GoogleBigquery",
        "useBrand": true,
        "link": "/docs/documentation/sections/conections/detinations/gcs"
      },
      {
        "id": "sqlserver",
        "title": "MS SQL Server",
        "description": "",
        "iconName": "MSSQL",
        "useBrand": true,
        "link": "/docs/documentation/sections/conections/detinations/sqlserver"
      },
      {
        "id": "fabric",
        "title": "Microsoft Fabric",
        "description": "Create a node to export data from a source and load it into a destination.",
        "iconName": "Fabric",
        "useBrand": true,
        "link": "/docs/documentation/sections/conections/detinations/fabric"
      },
      {
        "id": "postgresql-destination",
        "title": " PostgreSQL Destination",
        "description": "Connect to a PostgreSQL database to extract or load data. Supports local, remote, and cloud-hosted PostgreSQL instances, including Supabase, Amazon RDS, Azure Database for PostgreSQL, and Google Cloud SQL.",
        "iconName": "PostgreSQL",
        "useBrand": true,
        "link": "/docs/documentation/sections/conections/detinations/postgresql-destination"
      },
      {
        "id": "oracle-destination",
        "title": " Oracle Destination",
        "description": "",
        "iconName": "Oracle",
        "useBrand": true,
        "link": "/docs/documentation/sections/conections/detinations/oracle-destination"
      },
      {
        "id": "fileserver",
        "title": " Windows file server ",
        "description": "Create a node to export data as files into a storage layer such as AWS, Snowflake, Azure, Databricks, and Google Storage.",
        "iconName": "file",
        "useBrand": false,
        "link": "/docs/documentation/sections/conections/detinations/fileserver"
      },
      {
        "id": "mysql-destination",
        "title": "MySQL Destination Connection",
        "description": "Create a connection to a MySQL database.",
        "iconName": "mySQL",
        "useBrand": true,
        "link": "/docs/documentation/sections/conections/detinations/mysql-destination"
      },
      {
        "id": "hana",
        "title": "SAP HANA",
        "description": "Create a destination to load data into a SAP HANA database.",
        "iconName": "SAP",
        "useBrand": true,
        "link": "/docs/documentation/sections/conections/detinations/hana"
      }
    ]
  };

  class CrestoneConnectionsMarqueeWidget extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.connections = null;
      this.loading = true;
    }

    connectedCallback() {
      this.apiUrl = this.getAttribute('api-url') || 'https://crestone-help.seidoranalytics.com/api/connections.json';
      this.speed = this.getAttribute('speed') || 'medium'; // slow, medium, fast
      this.render();
      this.loadData();
    }

    async loadData() {
      try {
        const response = await fetch(this.apiUrl);
        if (!response.ok) {
          throw new Error('Server returned status ' + response.status);
        }
        this.connections = await response.json();
      } catch (err) {
        console.warn('Failed to fetch live connections, using embedded fallback:', err);
        this.connections = FALLBACK_DATA;
      } finally {
        this.loading = false;
        this.updateContent();
      }
    }

    getExternalLink(link) {
      if (!link) return '#';
      if (link.startsWith('http')) return link;
      const normalizedLink = link.startsWith('/') ? link : '/' + link;
      return 'https://crestone-help.seidoranalytics.com' + normalizedLink;
    }

    getSpeedDuration() {
      switch (this.speed) {
        case 'slow': return '65s';
        case 'fast': return '25s';
        case 'medium':
        default:
          return '45s';
      }
    }

    render() {
      const duration = this.getSpeedDuration();
      this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: block;
            font-family: 'Poppins', 'Inter', system-ui, -apple-system, sans-serif;
            width: 100%;
            box-sizing: border-box;
          }
          
          *, *:before, *:after {
            box-sizing: inherit;
          }

          .marquee-wrapper {
            display: flex;
            flex-direction: column;
            gap: 16px;
            width: 100%;
            overflow: hidden;
            padding: 12px 0;
            background-color: transparent;
          }
          
          .marquee-row {
            display: flex;
            overflow: hidden;
            width: 100%;
            user-select: none;
            /* Faded sides */
            mask-image: linear-gradient(to right, transparent, #000 8%, #000 92%, transparent);
            -webkit-mask-image: linear-gradient(to right, transparent, #000 8%, #000 92%, transparent);
          }

          .marquee-track {
            display: flex;
            width: max-content;
            will-change: transform;
          }

          .marquee-group {
            display: flex;
            gap: 16px;
            padding-right: 16px;
            flex-shrink: 0;
          }

          /* Cards styling */
          .connection-card {
            display: flex;
            align-items: center;
            background-color: #ffffff;
            border: 1px solid #e2e8f0;
            border-radius: 12px;
            padding: 10px 20px;
            gap: 12px;
            text-decoration: none;
            color: #1e293b;
            font-size: 14px;
            font-weight: 500;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.01);
            transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
            white-space: nowrap;
          }

          .connection-card:hover {
            border-color: #cbd5e1;
            background-color: #f8fafc;
            transform: translateY(-2px);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.04), 0 4px 6px -2px rgba(0, 0, 0, 0.02);
          }

          .icon-wrapper {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 24px;
            height: 24px;
            flex-shrink: 0;
            color: #475569;
          }

          .icon-wrapper svg {
            width: 100%;
            height: 100%;
            display: block;
          }

          .card-title {
            color: #1e293b;
          }

          /* Animation speed variable override */
          .scroll-left .marquee-track {
            animation: scroll-left ${duration} linear infinite;
          }

          .scroll-right .marquee-track {
            animation: scroll-right ${duration} linear infinite;
          }

          .marquee-row:hover .marquee-track {
            animation-play-state: paused;
          }

          @keyframes scroll-left {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          @keyframes scroll-right {
            0% {
              transform: translateX(-50%);
            }
            100% {
              transform: translateX(0);
            }
          }

          /* Loading state */
          .loading-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 40px 20px;
            gap: 16px;
            width: 100%;
          }

          .spinner {
            width: 32px;
            height: 32px;
            border: 3px solid #e2e8f0;
            border-top-color: #085eb2;
            border-radius: 50%;
            animation: spin 1s linear infinite;
          }

          @keyframes spin {
            to { transform: rotate(360deg); }
          }

          .loading-text {
            color: #64748b;
            font-size: 14px;
            font-weight: 500;
          }
        </style>
        
        <div id="marquee-container">
          <!-- Content will be rendered dynamically -->
        </div>
      `;
    }

    updateContent() {
      const container = this.shadowRoot.getElementById('marquee-container');
      if (this.loading) {
        container.innerHTML = `
          <div class="loading-container">
            <div class="spinner"></div>
            <div class="loading-text">Cargando conexiones...</div>
          </div>
        `;
        return;
      }

      // Mix connections
      const origins = this.connections.origins || [];
      const destinations = this.connections.destinations || [];
      
      // We mix them by alternating
      const mixed = [];
      const maxLength = Math.max(origins.length, destinations.length);
      for (let i = 0; i < maxLength; i++) {
        if (i < origins.length) mixed.push({ ...origins[i], isOrigin: true });
        if (i < destinations.length) mixed.push({ ...destinations[i], isOrigin: false });
      }

      // Distribute mixed items into Row 1 and Row 2 to ensure alternating types
      // Row 1: mixed indexes 0, 3, 4, 7, 8, 11, 12...
      // Row 2: mixed indexes 1, 2, 5, 6, 9, 10, 13...
      const row1Items = [];
      const row2Items = [];
      
      mixed.forEach((item, idx) => {
        const mod = idx % 4;
        if (mod === 0 || mod === 3) {
          row1Items.push(item);
        } else {
          row2Items.push(item);
        }
      });

      // Render rows
      const renderGroupHtml = (items) => {
        return items.map(item => {
          const iconName = item.iconName ? item.iconName.trim() : 'file';
          const iconSvg = ICONS[iconName] || ICONS['file'];
          const externalLink = this.getExternalLink(item.link);

          return `
            <a class="connection-card" href="${externalLink}" target="_blank" rel="noopener">
              <div class="icon-wrapper">
                ${iconSvg}
              </div>
              <span class="card-title">${item.title.trim()}</span>
            </a>
          `;
        }).join('');
      };

      const row1GroupHtml = renderGroupHtml(row1Items);
      const row2GroupHtml = renderGroupHtml(row2Items);

      container.innerHTML = `
        <div class="marquee-wrapper">
          <!-- Row 1: Scroll Left -->
          <div class="marquee-row scroll-left">
            <div class="marquee-track">
              <div class="marquee-group">
                ${row1GroupHtml}
              </div>
              <div class="marquee-group" aria-hidden="true">
                ${row1GroupHtml}
              </div>
            </div>
          </div>
          <!-- Row 2: Scroll Right -->
          <div class="marquee-row scroll-right">
            <div class="marquee-track">
              <div class="marquee-group">
                ${row2GroupHtml}
              </div>
              <div class="marquee-group" aria-hidden="true">
                ${row2GroupHtml}
              </div>
            </div>
          </div>
        </div>
      `;
    }
  }

  // Register the custom element if not already registered
  if (!customElements.get('crestone-connections-marquee-widget')) {
    customElements.define('crestone-connections-marquee-widget', CrestoneConnectionsMarqueeWidget);
  }
})();
