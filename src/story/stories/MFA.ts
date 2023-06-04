import { Story } from "../Story";



export const mFAStory: Story = {
    title: 'МИД',
    exposition: {
        description: 'Поступил запрос от международной организации FreeAI с предложением принять международные стандарты в сфере искусственного интеллекта. Поскольку организация понимает различие политических режимов в странах мира, она разделила предложение на два договора: о обмене наработками в сфере AI и о защите этических норм личности.',
        to: '/exposition/3',
        additionalFacts: []
    },
    upshot: {
        to: '/upshot/3',
        answers: [{
            text: 'Принять оба договора.',
            upshot: 'Последствия: Россия согласилась на обмен наработками в сфере искусственного интеллекта и защиту этических норм личности. Это позволило стране активно участвовать в международном сотрудничестве, разделять передовые технологии и обеспечивать защиту прав и свобод граждан. Однако, возникли сложности с соответствием некоторых этических норм между разными культурами и политическими системами, что вызвало беспокойство правительства.',
            effect: {
                pragmatism: 4,
                loyalty: -1,
                altruism: 2
            }
        },
        {
            text: 'Принять договор об обмене наработками, отказаться от договора о защите этических норм.',
            upshot: ' Россия согласилась на обмен наработками в сфере искусственного интеллекта, но отказалась от договора о защите этических норм. Это привело к более свободному использованию искусственного интеллекта и развитию передовых технологий в стране, но возник риск нарушения прав и свобод граждан и этических принципов.        ',
            effect: {
                pragmatism: 5,
                loyalty: 1,
                altruism: 0
            }
        }, 
        {
            text: 'Принять договор о защите этических норм, отказаться от договора об обмене наработками.',
            upshot: 'Россия отказалась от договора об обмене наработками в сфере искусственного интеллекта, но согласилась на договор о защите этических норм личности. Это означает, что страна сохранит свою независимость в разработке искусственного интеллекта и более строго будет защищать права и свободы граждан в цифровом пространстве. Однако, она может пропустить возможности обмена передовыми технологиями.            ',
            effect: {pragmatism: -2, loyalty: 1, altruism: 3}
        },
        {
            text: 'Отказаться от обоих договоров.',
            upshot: 'Россия отказалась от обоих договоров и не приняла предложение международной организации FreeAI. Это означает, что страна сохранит свою независимость в разработке искусственного интеллекта, но упустит возможности сотрудничества, обмена знаниями и передовыми технологиями. Это может вызвать недовольство и негативные последствия в международных отношениях.',
            effect:{
                pragmatism:-1,
                loyalty: 3,
                altruism: -1
            }
        }
        

        ]
    }
}