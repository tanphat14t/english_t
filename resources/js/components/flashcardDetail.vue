<template>
    <div>
        <div class="container" v-if="view == 1">
            <div class="row justify-content-center">
                <div class="col-xl-10">
                    <div class="main_content_iner main_content_padding">
                        <div class="dashboard_lg_card">
                            <div class="container-fluid no-gutters">
                                <div class="my_courses_wrapper">
                                    <div class="row">
                                        <div class="col-12">
                                        </div>
                                    </div>
                                    <div class="row d-flex align-items-center mb-2 ">
                                        <div class="col-xl-6 col-md-6 col-sm-12 mt-3">
                                            <div class="section__title3">
                                                <h3>
                                                    Flashcard
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="main_content_iner main_content_padding">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="dashboard_lg_card" style="height: 100%">
                                                        <div class="my_quizz_detail_wrapper text-center">
                                                            <div class="pont-quiz">11%</div>
                                                        </div>
                                                        <div class="">
                                                            <p>10 Đã thuộc</p>
                                                            <p>10 Chưa thuộc</p>
                                                            <p>60 Chưa học</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="row">
                                                        <div class="col-md-6 mb-3">
                                                            <div class="dashboard_lg_card">
                                                                <div class="my_quizz_detail_wrapper text-center">
                                                                    <div class="pont-quiz">Tổng số từ</div>
                                                                    <h3>{{ data.length }} Từ</h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6 mb-3">
                                                            <div class="dashboard_lg_card">
                                                                <div class="my_quizz_detail_wrapper text-center">
                                                                    <div class="pont-quiz">Chọn luyện từ</div>
                                                                    <h3>{{ data.length }} Từ</h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="dashboard_lg_card">
                                                                <div class="my_quizz_detail_wrapper text-center">
                                                                    <div class="pont-quiz">Ưu tiên từ</div>
                                                                    <h3>Mặt Định</h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="dashboard_lg_card">
                                                                <div class="my_quizz_detail_wrapper text-center">
                                                                    <div class="pont-quiz">Tự động đọc</div>
                                                                    <h3>Không</h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-12 text-center">
                                                    <div class="m-5">
                                                        <a href="" @click.prevent="view = 2"
                                                            class="theme_btn mr_15 m-auto mt-4 text-center">Học
                                                            Từ</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="detail-test" v-if="view == 2">
            <div class="detail-test-img"><img src="/public/images/background.webp" /></div>
            <div class="detail-test-cnt">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8">
                            <div class="box-word">
                                <div class="box-word-content" @click="card_click = !card_click"
                                    :class="{ 'click': card_click }">
                                    <div class="amination-remember" :class="{ 'show': rememberShow }" ref="card1"><span>Đã nhớ</span>
                                    </div>
                                    <div class="amination-no-remember" :class="{ 'show': rememberNotShow }" ref="card2"><span>Chưa nhớ</span></div>
                                    <div class="box-word-cnt-front">
                                        <div class="word-item-1">{{ show_word.word }}</div>
                                        <div class="word-item-2">{{ show_word.word_type }}</div>
                                        <div class="word-item-3">{{ show_word.word_read }}</div>
                                        <div class="word-item-4">
                                            <span>Bấm để xem giải thích và ví dụ</span>
                                        </div>
                                    </div>
                                    <div class="box-word-cnt-back">
                                        <div class="word-item-1">{{ show_word.word_trans }}</div>
                                        <div class="word-item-2" v-html="show_word.word_note"></div>
                                        <div class="word-item-3">
                                            <button @click.stop="rememberWordNot()">Chưa nhớ từ</button>
                                            <button @click.stop="rememberWord()">Đã nhớ từ</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="flashcard-result">
                                <div class="flashcard-time"><span>{{ formattedTime }}</span></div>
                                <div class="flashcard-remembered"><span>Đã nhớ: {{rememberedWord}}/{{ data.length }}</span></div>
                                <div class="flashcard-not-remember"><span>Chứa nhớ: {{ notRememberedWord }}/{{ data.length }}</span></div>
                                <div class="flashcard-close">
                                    <button>Kết thúc</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        id: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            view: 2,
            data: [],
            show_word: [],
            card_click: false,
            seconds: 0,
            interval: null,
            rememberedWord: 0,
            notRememberedWord: 0,
            rememberShow: false,
            rememberNotShow: false
        }
    },
    computed: {
        formattedTime() {
            const totalSeconds = this.seconds;
            const hrs = Math.floor(totalSeconds / 3600);
            const mins = Math.floor((totalSeconds % 3600) / 60);
            const secs = totalSeconds % 60;

            const pad = (num) => String(num).padStart(2, '0');

            return hrs > 0
                ? `${pad(hrs)}:${pad(mins)}:${pad(secs)}`
                : `${pad(mins)}:${pad(secs)}`;
        },
    },
    methods: {
        fetchDetail() {
            axios.get('/api/flashcard/detail/' + this.id, { 'headers': { 'Content-Type': 'text/plain' } })
                .then(
                    res => {
                        if (res.status == 200) {
                            this.data = res.data.data;
                            this.show_word = this.data[0]
                        }
                    }
                );
        },
        rememberWord() {
            this.rememberShow = true;
            this.rememberedWord++;
            const el = this.$refs.card1;
            const handler = () => {
                this.rememberShow = false;
                el.removeEventListener('animationend', handler);
            };
            el.addEventListener('animationend', handler);
        },
        rememberWordNot() {
            this.rememberNotShow = true;
            this.notRememberedWord++;
            const el = this.$refs.card2;
            const handler = () => {
                this.rememberNotShow = false;
                el.rememberNotShow('animationend', handler);
            };
            el.addEventListener('animationend', handler);
        },
        startTimer() {
            this.interval = setInterval(() => {
                this.seconds++;
            }, 1000);
        },
    },
    mounted() {
        this.fetchDetail();
        this.startTimer();
    }
}
</script>