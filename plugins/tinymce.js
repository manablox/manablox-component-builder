import Vue from 'vue'
import tinymce from 'tinymce/tinymce'
import 'tinymce/themes/silver/theme'
tinymce.baseURL = '/tinymce'
window.tinymce = tinymce

import Editor from '@tinymce/tinymce-vue'

Vue.component('editor', Editor)