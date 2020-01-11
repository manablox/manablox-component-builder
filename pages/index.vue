<template>
    <div class="app">
        <ComponentEditor :pagecomponents="pagecomponents" />
    </div>
</template>

<script>
export default {
    asyncData(){
        return {
            pagecomponents: [
                {
                    _id: "1x",
                    type: 'content',
                    settings: {},
                    content: {
                        headline: { type: 'htmlsingleinline', value: 'Testheadline' },
                        content: { type: 'htmlinline', value: '<p>Testcontent</p>' }
                    }
                },
                {
                    _id: "2",
                    type: 'content',
                    settings: {},
                    content: {
                        headline: { type: 'htmlsingleinline', value: 'Testheadline' },
                        content: { type: 'htmlinline', value: '<p>Testcontent</p>' }
                    }
                },
                {
                    _id: "3",
                    type: 'content',
                    settings: {},
                    content: {
                        headline: { type: 'htmlsingleinline', value: 'Testheadline' },
                        content: { type: 'htmlinline', value: '<p>Testcontent</p>' }
                    }
                },
                {
                    _id: "4",
                    type: 'content',
                    settings: {},
                    content: {
                        headline: { type: 'htmlsingleinline', value: 'Testheadline' },
                        content: { type: 'htmlinline', value: '<p>Testcontent</p>' }
                    }
                },
                {
                    _id: "5",
                    type: 'content',
                    settings: {},
                    content: {
                        headline: { type: 'htmlsingleinline', value: 'Testheadline' },
                        content: { type: 'htmlinline', value: '<p>Testcontent</p>' }
                    }
                },
                {
                    _id: "6",
                    type: 'content',
                    settings: {},
                    content: {
                        headline: { type: 'htmlsingleinline', value: 'Testheadline' },
                        content: { type: 'htmlinline', value: '<p>Testcontent</p>' }
                    }
                },
                {
                    _id: "7",
                    type: 'content',
                    settings: {},
                    content: {
                        headline: { type: 'htmlsingleinline', value: 'Testheadline' },
                        content: { type: 'htmlinline', value: '<p>Testcontent</p>' }
                    }
                },
                {
                    _id: "8",
                    type: 'content',
                    settings: {},
                    content: {
                        headline: { type: 'htmlsingleinline', value: 'Testheadline' },
                        content: { type: 'htmlinline', value: '<p>Testcontent</p>' }
                    }
                },
                {
                    _id: "9",
                    type: 'content',
                    settings: {},
                    content: {
                        headline: { type: 'htmlsingleinline', value: 'Testheadline' },
                        content: { type: 'htmlinline', value: '<p>Testcontent</p>' }
                    }
                },
                {
                    _id: "11",
                    type: 'content',
                    settings: {},
                    content: {
                        headline: { type: 'htmlsingleinline', value: 'Testheadline' },
                        content: { type: 'htmlinline', value: '<p>Testcontent</p>' }
                    }
                },
                {
                    _id: "12",
                    type: 'content',
                    settings: {},
                    content: {
                        headline: { type: 'htmlsingleinline', value: 'Testheadline' },
                        content: { type: 'htmlinline', value: '<p>Testcontent</p>' }
                    }
                },
                {
                    _id: "13",
                    type: 'content',
                    settings: {},
                    content: {
                        headline: { type: 'htmlsingleinline', value: 'Testheadline' },
                        content: { type: 'htmlinline', value: '<p>Testcontent</p>' }
                    }
                },
                {
                    _id: "14",
                    type: 'content',
                    settings: {},
                    content: {
                        headline: { type: 'htmlsingleinline', value: 'Testheadline' },
                        content: { type: 'htmlinline', value: '<p>Testcontent</p>' }
                    }
                },
                {
                    _id: "15",
                    type: 'content',
                    settings: {},
                    content: {
                        headline: { type: 'htmlsingleinline', value: 'Testheadline' },
                        content: { type: 'htmlinline', value: '<p>Testcontent</p>' }
                    }
                },
                {
                    _id: "16",
                    type: 'content',
                    settings: {},
                    content: {
                        headline: { type: 'htmlsingleinline', value: 'Testheadline' },
                        content: { type: 'htmlinline', value: '<p>Testcontent</p>' }
                    }
                },
                {
                    _id: "17",
                    type: 'content',
                    settings: {},
                    content: {
                        headline: { type: 'htmlsingleinline', value: 'Testheadline' },
                        content: { type: 'htmlinline', value: '<p>Testcontent</p>' }
                    }
                },
                {
                    _id: "18",
                    type: 'content',
                    settings: {},
                    content: {
                        headline: { type: 'htmlsingleinline', value: 'Testheadline' },
                        content: { type: 'htmlinline', value: '<p>Testcontent</p>' }
                    }
                },
                {
                    _id: "19",
                    type: 'content',
                    settings: {},
                    content: {
                        headline: { type: 'htmlsingleinline', value: 'Testheadline' },
                        content: { type: 'htmlinline', value: '<p>Testcontent</p>' }
                    }
                },
                {
                    _id: "21",
                    type: 'content',
                    settings: {},
                    content: {
                        headline: { type: 'htmlsingleinline', value: 'Testheadline' },
                        content: { type: 'htmlinline', value: '<p>Testcontent</p>' }
                    }
                },
                {
                    _id: "22",
                    type: 'content',
                    settings: {},
                    content: {
                        headline: { type: 'htmlsingleinline', value: 'Testheadline' },
                        content: { type: 'htmlinline', value: '<p>Testcontent</p>' }
                    }
                },
                {
                    _id: "23",
                    type: 'content',
                    settings: {},
                    content: {
                        headline: { type: 'htmlsingleinline', value: 'Testheadline' },
                        content: { type: 'htmlinline', value: '<p>Testcontent</p>' }
                    }
                },
                {
                    _id: "24",
                    type: 'content',
                    settings: {},
                    content: {
                        headline: { type: 'htmlsingleinline', value: 'Testheadline' },
                        content: { type: 'htmlinline', value: '<p>Testcontent</p>' }
                    }
                },
                {
                    _id: "25",
                    type: 'content',
                    settings: {},
                    content: {
                        headline: { type: 'htmlsingleinline', value: 'Testheadline' },
                        content: { type: 'htmlinline', value: '<p>Testcontent</p>' }
                    }
                },
                {
                    _id: "26",
                    type: 'content',
                    settings: {},
                    content: {
                        headline: { type: 'htmlsingleinline', value: 'Testheadline' },
                        content: { type: 'htmlinline', value: '<p>Testcontent</p>' }
                    }
                },
                {
                    _id: "27",
                    type: 'content',
                    settings: {},
                    content: {
                        headline: { type: 'htmlsingleinline', value: 'Testheadline' },
                        content: { type: 'htmlinline', value: '<p>Testcontent</p>' }
                    }
                },
                {
                    _id: "28",
                    type: 'content',
                    settings: {},
                    content: {
                        headline: { type: 'htmlsingleinline', value: 'Testheadline' },
                        content: { type: 'htmlinline', value: '<p>Testcontent</p>' }
                    }
                },
                {
                    _id: "29",
                    type: 'content',
                    settings: {},
                    content: {
                        headline: { type: 'htmlsingleinline', value: 'Testheadline' },
                        content: { type: 'htmlinline', value: '<p>Testcontent</p>' }
                    }
                },
                
                
            ]
        }
    }
}
</script>

<style>

</style>