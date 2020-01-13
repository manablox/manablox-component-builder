<template>
    <div class="app">
        <ComponentEditor :pagecomponents="pagecomponents" />
    </div>
</template>

<script>

const GetRandom = (min, max) => {
    return Math.round(Math.random() * (max - min) + min)
}
export default {
    asyncData(){
        return {
            pagecomponents: [
                {
                    _id: "1x",
                    type: 'contentblock',
                    settings: {
                        headline: { type: 'HeadlineSelect', value: 1 }
                    },
                    content: {
                        headline: { type: 'htmlsingleinline', value: 'Testheadline' },
                        content: { type: 'htmlinline', value: '<p>Testcontent</p>' }
                    }
                },
                {
                    _id: "2",
                    type: 'contentblock',
                    settings: {
                        headline: { type: 'HeadlineSelect', value: GetRandom(1, 5) }
                    },
                    content: {
                        headline: { type: 'htmlsingleinline', value: 'Testheadline' },
                        content: { type: 'htmlinline', value: '<p>Testcontent</p>' }
                    }
                },
                {
                    _id: "3",
                    type: 'contentblock',
                    settings: {
                        headline: { type: 'HeadlineSelect', value: GetRandom(1, 5) }
                    },
                    content: {
                        headline: { type: 'htmlsingleinline', value: 'Testheadline' },
                        content: { type: 'htmlinline', value: '<p>Testcontent</p>' }
                    }
                },
                {
                    _id: "4",
                    type: 'contentblock',
                    settings: {
                        headline: { type: 'HeadlineSelect', value: GetRandom(1, 5) }
                    },
                    content: {
                        headline: { type: 'htmlsingleinline', value: 'Testheadline' },
                        content: { type: 'htmlinline', value: '<p>Testcontent</p>' }
                    }
                },
                {
                    _id: "5",
                    type: 'contentblock',
                    settings: {
                        headline: { type: 'HeadlineSelect', value: GetRandom(1, 5) }
                    },
                    content: {
                        headline: { type: 'htmlsingleinline', value: 'Testheadline' },
                        content: { type: 'htmlinline', value: '<p>Testcontent</p>' }
                    }
                },
                {
                    _id: "6",
                    type: 'contentblock',
                    settings: {
                        headline: { type: 'HeadlineSelect', value: GetRandom(1, 5) }
                    },
                    content: {
                        headline: { type: 'htmlsingleinline', value: 'Testheadline' },
                        content: { type: 'htmlinline', value: '<p>Testcontent</p>' }
                    }
                },
                {
                    _id: "7",
                    type: 'contentblock',
                    settings: {
                        headline: { type: 'HeadlineSelect', value: GetRandom(1, 5) }
                    },
                    content: {
                        headline: { type: 'htmlsingleinline', value: 'Testheadline' },
                        content: { type: 'htmlinline', value: '<p>Testcontent</p>' }
                    }
                },
                {
                    _id: "8",
                    type: 'contentblock',
                    settings: {
                        headline: { type: 'HeadlineSelect', value: GetRandom(1, 5) }
                    },
                    content: {
                        headline: { type: 'htmlsingleinline', value: 'Testheadline' },
                        content: { type: 'htmlinline', value: '<p>Testcontent</p>' }
                    }
                },
                {
                    _id: "9",
                    type: 'contentblock',
                    settings: {
                        headline: { type: 'HeadlineSelect', value: GetRandom(1, 5) }
                    },
                    content: {
                        headline: { type: 'htmlsingleinline', value: 'Testheadline' },
                        content: { type: 'htmlinline', value: '<p>Testcontent</p>' }
                    }
                },
                {
                    _id: "11",
                    type: 'contentblock',
                    settings: {
                        headline: { type: 'HeadlineSelect', value: GetRandom(1, 5) }
                    },
                    content: {
                        headline: { type: 'htmlsingleinline', value: 'Testheadline' },
                        content: { type: 'htmlinline', value: '<p>Testcontent</p>' }
                    }
                },
                {
                    _id: "12",
                    type: 'contentblock',
                    settings: {
                        headline: { type: 'HeadlineSelect', value: GetRandom(1, 5) }
                    },
                    content: {
                        headline: { type: 'htmlsingleinline', value: 'Testheadline' },
                        content: { type: 'htmlinline', value: '<p>Testcontent</p>' }
                    }
                },
                {
                    _id: "13",
                    type: 'contentblock',
                    settings: {
                        headline: { type: 'HeadlineSelect', value: GetRandom(1, 5) }
                    },
                    content: {
                        headline: { type: 'htmlsingleinline', value: 'Testheadline' },
                        content: { type: 'htmlinline', value: '<p>Testcontent</p>' }
                    }
                },
                {
                    _id: "14",
                    type: 'contentblock',
                    settings: {
                        headline: { type: 'HeadlineSelect', value: GetRandom(1, 5) }
                    },
                    content: {
                        headline: { type: 'htmlsingleinline', value: 'Testheadline' },
                        content: { type: 'htmlinline', value: '<p>Testcontent</p>' }
                    }
                },
                {
                    _id: "15",
                    type: 'contentblock',
                    settings: {
                        headline: { type: 'HeadlineSelect', value: GetRandom(1, 5) }
                    },
                    content: {
                        headline: { type: 'htmlsingleinline', value: 'Testheadline' },
                        content: { type: 'htmlinline', value: '<p>Testcontent</p>' }
                    }
                },
                {
                    _id: "16",
                    type: 'contentblock',
                    settings: {
                        headline: { type: 'HeadlineSelect', value: GetRandom(1, 5) }
                    },
                    content: {
                        headline: { type: 'htmlsingleinline', value: 'Testheadline' },
                        content: { type: 'htmlinline', value: '<p>Testcontent</p>' }
                    }
                },
                {
                    _id: "17",
                    type: 'contentblock',
                    settings: {
                        headline: { type: 'HeadlineSelect', value: GetRandom(1, 5) }
                    },
                    content: {
                        headline: { type: 'htmlsingleinline', value: 'Testheadline' },
                        content: { type: 'htmlinline', value: '<p>Testcontent</p>' }
                    }
                },
                {
                    _id: "18",
                    type: 'contentblock',
                    settings: {
                        headline: { type: 'HeadlineSelect', value: GetRandom(1, 5) }
                    },
                    content: {
                        headline: { type: 'htmlsingleinline', value: 'Testheadline' },
                        content: { type: 'htmlinline', value: '<p>Testcontent</p>' }
                    }
                },
                {
                    _id: "19",
                    type: 'contentblock',
                    settings: {
                        headline: { type: 'HeadlineSelect', value: GetRandom(1, 5) }
                    },
                    content: {
                        headline: { type: 'htmlsingleinline', value: 'Testheadline' },
                        content: { type: 'htmlinline', value: '<p>Testcontent</p>' }
                    }
                },
                {
                    _id: "21",
                    type: 'contentblock',
                    settings: {
                        headline: { type: 'HeadlineSelect', value: GetRandom(1, 5) }
                    },
                    content: {
                        headline: { type: 'htmlsingleinline', value: 'Testheadline' },
                        content: { type: 'htmlinline', value: '<p>Testcontent</p>' }
                    }
                },
                {
                    _id: "22",
                    type: 'contentblock',
                    settings: {
                        headline: { type: 'HeadlineSelect', value: GetRandom(1, 5) }
                    },
                    content: {
                        headline: { type: 'htmlsingleinline', value: 'Testheadline' },
                        content: { type: 'htmlinline', value: '<p>Testcontent</p>' }
                    }
                },
                {
                    _id: "23",
                    type: 'contentblock',
                    settings: {
                        headline: { type: 'HeadlineSelect', value: GetRandom(1, 5) }
                    },
                    content: {
                        headline: { type: 'htmlsingleinline', value: 'Testheadline' },
                        content: { type: 'htmlinline', value: '<p>Testcontent</p>' }
                    }
                },
                {
                    _id: "24",
                    type: 'contentblock',
                    settings: {
                        headline: { type: 'HeadlineSelect', value: GetRandom(1, 5) }
                    },
                    content: {
                        headline: { type: 'htmlsingleinline', value: 'Testheadline' },
                        content: { type: 'htmlinline', value: '<p>Testcontent</p>' }
                    }
                },
                {
                    _id: "25",
                    type: 'contentblock',
                    settings: {
                        headline: { type: 'HeadlineSelect', value: GetRandom(1, 5) }
                    },
                    content: {
                        headline: { type: 'htmlsingleinline', value: 'Testheadline' },
                        content: { type: 'htmlinline', value: '<p>Testcontent</p>' }
                    }
                },
                {
                    _id: "26",
                    type: 'contentblock',
                    settings: {
                        headline: { type: 'HeadlineSelect', value: GetRandom(1, 5) }
                    },
                    content: {
                        headline: { type: 'htmlsingleinline', value: 'Testheadline' },
                        content: { type: 'htmlinline', value: '<p>Testcontent</p>' }
                    }
                },
                {
                    _id: "27",
                    type: 'contentblock',
                    settings: {
                        headline: { type: 'HeadlineSelect', value: GetRandom(1, 5) }
                    },
                    content: {
                        headline: { type: 'htmlsingleinline', value: 'Testheadline' },
                        content: { type: 'htmlinline', value: '<p>Testcontent</p>' }
                    }
                },
                {
                    _id: "28",
                    type: 'contentblock',
                    settings: {
                        headline: { type: 'HeadlineSelect', value: GetRandom(1, 5) }
                    },
                    content: {
                        headline: { type: 'htmlsingleinline', value: 'Testheadline' },
                        content: { type: 'htmlinline', value: '<p>Testcontent</p>' }
                    }
                },
                {
                    _id: "29",
                    type: 'contentblock',
                    settings: {
                        headline: { type: 'HeadlineSelect', value: GetRandom(1, 5) }
                    },
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