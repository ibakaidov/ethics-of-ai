import { Story } from "../Story";


export const hHStory: Story = {
    title: 'Кровожадный HeadHunter',
    exposition: {
        to: '/upshot/0',
        description: 'В  компании $0 появилась нейросетевая система, которая автоматически отбирает кандидатов на работу на основе их профессиональных навыков и опыта. Однако возник вопрос о законности такой системы и соответствии ее действиям действующему законодательству. Как вы реагируете на эту проблему и какие действия предпримете?',
        additionalFacts: [
            {
                text:'Грефбанк',
                cost: 1,
                currency: 'pragmatism'
            }
        ]
    },
    upshot: {
        to: '/upshot/2',
        answers: [
            {
                text: 'Принять решение о легализации нейросетевой системы, предоставив компаниям возможность использовать ее для отбора кандидатов.',
                upshot: `Принятие решения о легализации нейросетевой системы для отбора кандидатов привело к ряду последствий. Компании получили возможность использовать эту систему в своих процессах найма, что привело к автоматизации и оптимизации процесса подбора персонала. Благодаря использованию нейросетевой системы компании смогли более точно и эффективно оценивать кандидатов на основе их профессиональных навыков и опыта. Это также привело к сокращению времени и ресурсов, затрачиваемых на ручной отбор кандидатов, что улучшило производительность и эффективность компаний. Более точные и объективные критерии отбора позволили уменьшить вероятность субъективных предубеждений или дискриминации при найме персонала.
                Однако решение о легализации нейросетевой системы также вызвало определенные опасения и противоречия. Некоторые критики выразили беспокойство относительно приватности и безопасности персональных данных, которые могут быть использованы в процессе отбора. Также возникли вопросы о возможности исключения человеческого фактора и интуиции при найме персонала.
               `,
                effect: {
                    loyalty: 1,
                    altruism: 0,
                    pragmatism: 9
                }
            },
            {
                text: ' Внести изменения в существующее законодательство, чтобы учесть особенности использования нейросетевых систем в процессе найма персонала и установить четкие правила и ограничения для их применения.                ',
                upshot: `Внесение изменений в существующее законодательство, чтобы учесть особенности использования нейросетевых систем в процессе найма персонала, имело ряд последствий. Прежде всего, были установлены четкие правила и ограничения для применения таких систем. Законодательство определило требования к прозрачности и объективности алгоритмов, использованных в нейросетевых системах, а также обязательство компаний предоставлять ясную информацию о процессе отбора.

                Это привело к улучшению правовой защиты кандидатов, которые стали иметь возможность обжаловать решения, принятые на основе нейросетевых систем. Кроме того, внесение изменений в законодательство помогло предотвратить возможное злоупотребление или неправомерное использование нейросетевых систем в процессе найма.
                
                Однако такие изменения также потребовали дополнительных усилий со стороны компаний. Они должны были привести свои системы в соответствие с новыми требованиями и обеспечить их соответствие правовым нормам. Это могло потребовать дополнительных инвестиций в техническую поддержку и обучение персонала.
                
                В целом, изменения в законодательстве позволили установить четкие правила и ограничения для использования нейросетевых систем в процессе найма персонала, обеспечивая более справедливый и прозрачный процесс отбора. Это способствовало улучшению правовой защиты кандидатов и предотвращению возможного злоупотребления такими системами.
                
                `,
                effect: {
                    loyalty: 3,
                    altruism: 2,
                    pragmatism: 8
                }
            },
            {
                text: 'Принять решение о запрете использования нейросетевой системы для отбора кандидатов на работу.',
                upshot: `Принятие решения о запрете использования нейросетевой системы для отбора кандидатов на работу имело ряд последствий. Прежде всего, законодательно запретить компаниям применять подобные системы в процессе найма создало юридическую основу для защиты прав и интересов кандидатов.
Запрет использования нейросетевых систем в найме укрепил принципы равенства и справедливости, исключив возможность дискриминации определенных групп людей на основе их характеристик, включая расу, пол, возраст или другие факторы. Это способствовало созданию более справедливых и инклюзивных условий для всех кандидатов.
`,
                effect: {
                    loyalty: 2,
                    altruism: 5,
                    pragmatism: 0
                }
            },
            {
                text: 'Принять решение об обязательной передаче данных о соискателях работы в правительством',
                upshot: `Принятие решения об обязательстве компаний сливать данные о соискателях работы правительству имело ряд последствий. Во-первых, такое обязательство способствовало усилению контроля со стороны государства и повышению безопасности при приеме на работу.
                Обязательная передача данных о соискателях работы с правительством позволила проводить более глубокую проверку кандидатов и идентифицировать потенциальные угрозы безопасности, связанные с наймом. Это помогало уменьшить риск проникновения на работу лиц с преступным прошлым или тех, кто может представлять опасность для общества.
                Кроме того, обязательное слияние данных о соискателях работы с правительством способствовало сбору статистической информации о рынке труда и демографических трендах. Это позволяло правительству проводить анализ и разработку соответствующих и программ для поддержки занятости и улучшения рабочих условий.
                Однако, такое обязательство вызывало опасения в отношении конфиденциальности и защиты персональных данных соискателей работы. Правительству требовалось принимать дополнительные меры для обеспечения безопасности и нераспространения собранных данных. Это могло вызывать определенное недоверие и сопротивление среди соискателей, которые опасались злоупотребления или неправомерного использования их личной информации.
                `,
                effect:{
                    loyalty: 9,
                    pragmatism: 3,
                    altruism: 0
                }
            }
        ]

    }
}