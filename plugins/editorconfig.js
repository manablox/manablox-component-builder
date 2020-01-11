import Vue from 'vue'

export default () => {
    Vue.prototype.$editorconfig = {
        htmlsingleinline: {
            inline: true,
            forced_root_block: ''
        },
        htmlinline: {
            inline: true,
        }
    }
}

// export default () => {
//     Vue.prototype.$editorconfig = {
//         inline: {
//             forced_root_block: '',
//             inline: true,
//             toolbar: 'bold italic underline'
//         },
//         standard: {
//             branding: false,
//             menu: {
//                 edit: { title: 'Edit', items: 'undo redo | cut copy paste pastetext | selectall | code' },
//                 format: { title: 'Format', items: 'bold italic underline strikethrough superscript subscript | formats | removeformat' },
//                 table: { title: 'Table', items: 'inserttable tableprops deletetable | cell row column' }
//             },
//             toolbar: 'bold italic underline | alignleft aligncenter alignright alignjustify | numlist | link image | code',
//             plugins: [
//                 'code',
//                 'wordcount',
//                 'link',
//                 'image',
//                 'lists',
//                 'paste',
//                 'table',
//             ]
//         },
//         headline: {
//             forced_root_block: '',
//             branding: false,
//             menu: {
//                 edit: { title: 'Edit', items: 'undo redo | cut copy paste pastetext | selectall | code' },
//                 format: { title: 'Format', items: 'bold | removeformat' },
//             },
//             plugins: [
//                 'wordcount',
//                 'link',
//                 'image',
//                 'lists',
//                 'paste',
//                 'table',
//                 'code'
//             ]
//         },
//         noparagraph: {
//             forced_root_block: '',
//             branding: false,
//             menu: {
//                 edit: { title: 'Edit', items: 'undo redo | cut copy paste pastetext | selectall | code' },
//                 format: { title: 'Format', items: 'bold italic underline strikethrough superscript subscript | formats | removeformat' },
//                 table: { title: 'Table', items: 'inserttable tableprops deletetable | cell row column' }
//             },
//             plugins: [
//                 'wordcount',
//                 'link',
//                 'image',
//                 'lists',
//                 'paste',
//                 'table',
//                 'code'
//             ]
//         },
//         noimage: {
//             branding: false,
//             menu: {
//                 edit: { title: 'Edit', items: 'undo redo | cut copy paste pastetext | selectall | code' },
//                 format: { title: 'Format', items: 'bold italic underline strikethrough superscript subscript | formats | removeformat' },
//                 table: { title: 'Table', items: 'inserttable tableprops deletetable | cell row column' }
//             },
//             plugins: [
//                 'wordcount',
//                 'link',
//                 'lists',
//                 'paste',
//                 'table',
//                 'code'
//             ]
//         }
//     }
// }