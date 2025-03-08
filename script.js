// Datos de emojis
const emojiData = {
    categories: {
        recent: {
            title: "Usados frecuentemente",
            emojis: ["😎", "😂", "📱", "😄", "⚖️"]
        },
        people: {
            title: "Emoticonos y personas",
            emojis: ["😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣", "😊", "😇", "🙂", "🙃", "😉", "😌", "😍", "🥰", "😘", "😗", "😙", "😚", "😋", "😛", "😝", "😜", "🤪", "🤨", "🧐", "🤓", "😎", "🤩", "🥳", "😏", "😒", "😞", "😔", "😟", "😕", "🙁", "☹️", "😣", "😖", "😫", "😩", "🥺", "😢", "😭", "😤", "😠", "😡", "🤬", "🤯", "😳", "🥵", "🥶", "😱", "😨", "😰", "😥", "😓", "🤗", "🤔", "🤭", "🤫", "🤥", "😶", "😑", "😵", "😬", "🙄", "😮", "😲", "🥱", "😴", "🤤", "😪", "🤐", "🤢", "🤮", "🤧", "🥴", "😷", "🤒", "🤕", "🤑", "🤠", "😈", "👿", "👹", "🤡", "💩", "👻", "💀", "☠️", "👽", "👾", "🤖", "🎃", "😺", "😸", "😹", "😻", "😼", "😽", "🙀", "😿", "😾", "🤲", "👐", "👏"],
            keywords: {
                "😀": {
                    name: "¿Qué significa el emoji de la cara sonriente?",
                    description: "Una cara amarilla con ojos abiertos y una amplia sonrisa mostrando los dientes. Significa genuina felicidad y emociones positivas.",
                    synonyms: [
                        "sonrisa", "feliz", "contento", "alegre", "radiante",
                        "dichoso", "jubiloso", "animado", "satisfecho", "optimista",
                        // Regionalismos
                        "chévere", "copado", "guay", "chido", "bacán",
                        // Términos coloquiales
                        "de buen rollo", "al tope", "a tope", "contentísimo"
                    ]
                },
                "😃": {
                    name: "¿Qué significa el emoji de la cara sonriente con ojos grandes?",
                    description: "Una cara amarilla con ojos muy abiertos y una gran sonrisa mostrando los dientes. Su significado es de entusiasmo y emoción intensa.",
                    synonyms: [
                        "emocionado", "entusiasmado", "ilusionado", "exaltado", "eufórico",
                        "radiante", "felicísimo", "contentísimo", "alegre", "animado",
                        // Regionalismos
                        "prendido", "enchufado", "pilas", "al palo", "a full",
                        // Términos coloquiales
                        "flipando", "a tope", "super feliz", "contentazo"
                    ]
                },
                "😄": {
                    name: "¿Qué significa el emoji de la cara sonriente con ojos sonrientes?",
                    description: "Una cara amarilla con ojos en forma de arco y amplia sonrisa mostrando los dientes. Su significado es de orgullo, satisfacción o confianza en sí mismo.",
                    synonyms: [
                        "risueño", "jovial", "radiante", "dichoso", "contento",
                        "feliz", "sonriente", "alegre", "animado", "gozoso",
                        // Regionalismos
                        "chocho", "contentazo", "pleno", "felicidoso", "requetefeliz",
                        // Términos coloquiales
                        "de gusto", "que no cabe en sí", "que revienta de felicidad"
                    ]
                },
                "😁": {
                    name: "¿Qué significa el emoji de la cara radiante con ojos sonrientes?",
                    description: "Una cara amarilla con ojos en forma de arco y sonrisa grande mostrando los dientes. Su significado es de orgullo, satisfacción o confianza en sí mismo.",
                    synonyms: [
                        // Características físicas
                        "sonrisa con dientes", "ojos felices", "sonrisa grande",
                        "cara radiante", "ojos en media luna", "dientes blancos",
                        "sonrisa amplia", "cara alegre",
                        // Estados emocionales
                        "feliz", "contento", "radiante", "alegre", "dichoso",
                        "entusiasmado", "emocionado", "encantado", "jubiloso",
                        // Regionalismos
                        "contentísimo", "felicísimo", "chocho", "pleno",
                        // Términos coloquiales
                        "más feliz que unas pascuas", "que no cabe en sí de gozo",
                        // Elementos visuales
                        "emoji sonriente", "cara feliz con dientes", "sonrisa brillante"
                    ]
                },
                "😆": {
                    name: "¿Qué significa el emoji de la cara sonriente con los ojos cerrados?",
                    description: "Una cara con los ojos cerrados fuertemente y una amplia sonrisa mostrando los dientes. Significa risa intensa o diversión extrema.",
                    synonyms: [
                        // Características físicas
                        "ojos cerrados", "sonrisa amplia", "dientes visibles",
                        "cara riendo", "expresión divertida", "risa intensa",
                        // Estados emocionales
                        "divertido", "risueño", "gracioso", "entretenido", "alegre",
                        "regocijado", "jubiloso", "festivo", "animado",
                        // Regionalismos
                        "chistoso", "jocoso", "burlón", "bromista",
                        // Términos coloquiales
                        "muerto de risa", "partiéndose", "desternillándose",
                        // Elementos visuales
                        "cara riendo", "risa con ojos cerrados", "sonrisa divertida"
                    ]
                },
                "😅": {
                    name: "¿Qué significa el emoji de la cara sonriente con sudor?",
                    description: "Una cara sonriente con una gota de sudor en la frente. Significa alivio, incomodidad o situación embarazosa.",
                    synonyms: [
                        // Características físicas
                        "gota de sudor", "sudor en la frente", "sonrisa nerviosa",
                        "cara sudando", "sonrisa incómoda", "gota en la frente",
                        "cara con sudor", "sonrisa forzada",
                        // Estados emocionales
                        "aliviado", "incómodo", "nervioso", "avergonzado", "apurado",
                        "tenso", "embarazoso", "apurado", "intranquilo",
                        // Regionalismos
                        "apenado", "cortado", "abochornado", "azarado",
                        // Términos coloquiales
                        "pasando vergüenza", "momento incómodo", "sudando la gota gorda",
                        // Elementos visuales
                        "emoji sudando", "cara sonriente con gota", "sonrisa con sudor"
                    ]
                },
                "😂": {
                    name: "¿Qué significa el emoji de la cara con lágrimas de alegría?",
                    description: "Una cara amarilla con una sonrisa abierta y lágrimas de felicidad. Significa que algo es tan gracioso que te hace llorar de risa.",
                    synonyms: [
                        "risa", "carcajada", "gracioso", "divertido", "jajaja",
                        "risas", "humor", "diversión", "chiste", "gracia",
                        "chistoso", "cómico", "buenísimo", "morirse de risa",
                        "partirse", "troncharse", "desternillarse", "reventarse"
                    ]
                },
                "🤣": {
                    name: "¿Qué significa el emoji de rodando de risa?",
                    description: "Una cara amarilla inclinada, riendo tan fuerte que muestra lágrimas de alegría. El emoji está rotado para sugerir que la persona está literalmente 'rodando de risa'.",
                    synonyms: [
                        "morirse de risa", "llorar de risa", "reventarse", "desternillarse",
                        "partirse", "troncharse", "carcajada", "risa incontrolable",
                        // Regionalismos
                        "cagarse de risa", "mearse de risa", "morirse de la risa",
                        // Términos coloquiales
                        "lol", "jajaja", "muerto de risa", "no poder más"
                    ]
                },
                "😊": {
                    name: "¿Qué significa el emoji de la cara sonriente sonrojada?",
                    description: "Una cara sonriente con ojos sonrientes y mejillas rosadas. Significa felicidad genuina, calidez, gratitud o timidez.",
                    synonyms: [
                        "sonrojado", "tímido", "avergonzado", "halagado", "agradecido",
                        "ruborizado", "complacido", "modesto", "dulce", "tierno",
                        // Regionalismos
                        "apenado", "colorado", "achicopalado", "cortado",
                        // Términos coloquiales
                        "todo rojo", "como un tomate", "rojito"
                    ]
                },
                "😇": {
                    name: "¿Qué significa el emoji de la cara sonriente con halo?",
                    description: "Una cara sonriente con un halo dorado flotando sobre la cabeza. Su significado es de inocencia, bondad o comportamiento angelical.",
                    synonyms: [
                        "angelical", "inocente", "santo", "bueno", "puro",
                        "virtuoso", "angelito", "bendito", "inmaculado", "noble",
                        // Regionalismos
                        "santito", "angelote", "bendecido", "pureto",
                        // Términos coloquiales
                        "no rompe un plato", "mosquita muerta", "pan de Dios"
                    ]
                },
                "🙂": {
                    name: "¿Qué significa el emoji de la cara ligeramente sonriente?",
                    description: "Una cara amarilla con una leve sonrisa. Puede significar amabilidad, pero también se usa para indicar ironía o incomodidad.",
                    synonyms: [
                        "amable", "cordial", "simpático", "agradable", "cortés",
                        "educado", "diplomático", "formal", "correcto", "comedido",
                        // Regionalismos
                        "buena onda", "majo", "piola", "chévere",
                        // Términos coloquiales
                        "por compromiso", "forzado", "de circunstancias"
                    ]
                },
                "🙃": {
                    name: "¿Qué significa el emoji de la cara al revés?",
                    description: "Una cara sonriente volteada al revés. Se usa para significar sarcasmo, ironía o una situación absurda.",
                    synonyms: [
                        "irónico", "sarcástico", "absurdo", "bromista", "juguetón",
                        "burlón", "chistoso", "gracioso", "divertido", "jocoso",
                        // Regionalismos
                        "cachondo", "chistoso", "bromista", "vacilón",
                        // Términos coloquiales
                        "en plan broma", "de coña", "de broma"
                    ]
                },
                "😉": {
                    name: "¿Qué significa el emoji de la cara guiñando un ojo?",
                    description: "Una cara amarilla guiñando un ojo y con una leve sonrisa. Sugiere complicidad, broma o coqueteo.",
                    synonyms: [
                        "guiño", "coqueto", "pícaro", "cómplice", "travieso",
                        "juguetón", "bromista", "insinuante", "sugerente", "seductor",
                        // Regionalismos
                        "pillín", "pillo", "picarón", "tunante",
                        // Términos coloquiales
                        "en plan ligue", "tirando la caña", "dando cuerda"
                    ]
                },
                "😌": {
                    name: "¿Qué significa el emoji de la cara aliviada?",
                    description: "Una cara serena con ojos cerrados y leve sonrisa. Su significado es de alivio, satisfacción o paz interior.",
                    synonyms: [
                        "aliviado", "tranquilo", "relajado", "sereno", "calmado",
                        "sosegado", "pacífico", "satisfecho", "contento", "plácido",
                        // Regionalismos
                        "chido", "tranqui", "relajado", "pancho",
                        // Términos coloquiales
                        "en paz", "a gusto", "sin estrés"
                    ]
                },
                "😍": {
                    name: "¿Qué significa el emoji de la cara sonriente con ojos de corazón?",
                    description: "Una cara sonriente con ojos en forma de corazón. Significa amor intenso, admiración o encanto por algo o alguien.",
                    synonyms: [
                        "enamorado", "encantado", "fascinado", "cautivado", "embelesado",
                        "ilusionado", "maravillado", "embobado", "prendado", "atraído",
                        // Regionalismos
                        "enganchado", "pillado", "flechado", "colado",
                        // Términos coloquiales
                        "loco por", "muerto de amor", "derretido"
                    ]
                },
                "🥰": {
                    name: "¿Qué significa el emoji de la cara sonriente con corazones?",
                    description: "Una cara sonriente rodeada de corazones flotantes. Significa adoración, gratitud o un sentimiento de amor y aprecio.",
                    synonyms: [
                        "adorable", "amoroso", "cariñoso", "tierno", "dulce",
                        "afectuoso", "mimoso", "romántico", "apreciado", "querido",
                        // Regionalismos
                        "apapacho", "mimado", "consentido", "regalón",
                        // Términos coloquiales
                        "lleno de amor", "derramando amor", "todo corazones"
                    ]
                },
                "😘": {
                    name: "¿Qué significa el emoji de la cara lanzando un beso?",
                    description: "Una cara guiñando un ojo y lanzando un beso con un corazón. Significa afecto, cariño o agradecimiento.",
                    synonyms: [
                        "beso", "cariño", "afecto", "amor", "besito",
                        "muak", "abrazo", "ternura", "aprecio", "gratitud",
                        // Regionalismos
                        "besote", "piquito", "beshito", "chucho",
                        // Términos coloquiales
                        "te mando un beso", "besitos", "muacks"
                    ]
                },
                "😗": {
                    name: "¿Qué significa el emoji de la cara besando?",
                    description: "Una cara amarilla con ojos abiertos y labios fruncidos en posición de beso. Su significado es de un beso amistoso o cariñoso.",
                    synonyms: [
                        "beso", "besando", "besito", "cariño", "afecto",
                        "mimo", "ternura", "cariñoso", "dulce", "amistoso",
                        // Regionalismos
                        "piquito", "beshito", "mua", "muah",
                        // Términos coloquiales
                        "dar un beso", "tirar un beso", "beso volado"
                    ]
                },
                "😙": {
                    name: "¿Qué significa el emoji de la cara besando con ojos sonrientes?",
                    description: "Una cara amarilla con ojos sonrientes y labios fruncidos en posición de beso. Significa felicidad y afecto al mismo tiempo.",
                    synonyms: [
                        "beso feliz", "beso alegre", "beso cariñoso", "beso dulce", "beso tierno",
                        "cariñoso", "afectuoso", "amoroso", "dulce", "tierno",
                        // Regionalismos
                        "besito dulce", "beso contento", "beso de amor", "besito feliz",
                        // Términos coloquiales
                        "beso con amor", "beso con cariño", "beso sonriente"
                    ]
                },
                "😚": {
                    name: "¿Qué significa el emoji de la cara besando con ojos cerrados?",
                    description: "Una cara amarilla con ojos cerrados y labios fruncidos en posición de beso. Su significado es de timidez o ternura al dar un beso.",
                    synonyms: [
                        "beso tímido", "beso tierno", "beso dulce", "beso suave", "beso romántico",
                        "tímido", "vergonzoso", "dulce", "tierno", "romántico",
                        // Regionalismos
                        "besito tímido", "beso cortado", "beso penoso", "besito de amor",
                        // Términos coloquiales
                        "beso con pena", "beso inocente", "beso tímido"
                    ]
                },
                "😋": {
                    name: "¿Qué significa el emoji de la cara saboreando comida?",
                    description: "Una cara sonriente con ojos cerrados y lengua afuera, saboreando algo delicioso. Significa deleite por comida o algo que gusta mucho.",
                    synonyms: [
                        "delicioso", "sabroso", "rico", "hambre", "antojo",
                        "glotonería", "apetito", "gusto", "sabor", "deleite",
                        // Regionalismos
                        "manjar", "riquísimo", "buenísimo", "exquisito",
                        // Términos coloquiales
                        "se me hace agua la boca", "me relamo", "qué rico"
                    ]
                },
                "😛": {
                    name: "¿Qué significa el emoji de la cara con lengua afuera?",
                    description: "Una cara con ojos abiertos y lengua afuera. Puede significar juego, broma o travesura.",
                    synonyms: [
                        "travieso", "juguetón", "bromista", "burlón", "pícaro",
                        "gracioso", "divertido", "chistoso", "juego", "broma",
                        // Regionalismos
                        "payaso", "vacilón", "cachondo", "chistoso",
                        // Términos coloquiales
                        "haciendo mofa", "en broma", "de juego"
                    ]
                },
                "😝": {
                    name: "¿Qué significa el emoji de la cara con lengua afuera y ojos cerrados?",
                    description: "Una cara con la lengua sacada y los ojos fuertemente cerrados. Significa broma, juego o sabor intenso.",
                    synonyms: [
                        // Características físicas
                        "lengua fuera ojos cerrados", "ojos apretados", "lengua sacada",
                        "cara con lengua y ojos cerrados", "expresión juguetona",
                        "gesto travieso", "ojos cerrados lengua fuera",
                        // Estados emocionales
                        "juguetón", "bromista", "gracioso", "divertido", "travieso",
                        "pícaro", "chistoso", "burlón", "alegre",
                        // Regionalismos
                        "payaso", "bufón", "chancero", "guasón",
                        // Términos coloquiales
                        "haciendo el tonto", "de coña", "en broma",
                        // Elementos visuales
                        "emoji ojos cerrados lengua", "cara juguetona", "gesto bromista"
                    ]
                },
                "😜": {
                    name: "¿Qué significa el emoji de la cara guiñando con lengua afuera?",
                    description: "Una cara guiñando un ojo y sacando la lengua. Sugiere broma, diversión o no tomar algo en serio.",
                    synonyms: [
                        "bromista", "juguetón", "travieso", "pícaro", "chistoso",
                        "divertido", "gracioso", "burlón", "juego", "diversión",
                        // Regionalismos
                        "vacilón", "cachondo", "chistoso", "payaso",
                        // Términos coloquiales
                        "de broma", "en plan", "de coña"
                    ]
                },
                "🤪": {
                    name: "¿Qué significa el emoji de la cara loca?",
                    description: "Una cara con ojos desalineados y lengua afuera. Significa locura, diversión extrema o comportamiento alocado.",
                    synonyms: [
                        "loco", "alocado", "chiflado", "disparatado", "divertido",
                        "desquiciado", "demente", "gracioso", "excéntrico", "extravagante",
                        // Regionalismos
                        "chalado", "pirado", "zafado", "tarumba",
                        // Términos coloquiales
                        "estar como una cabra", "estar del coco", "estar zumbado"
                    ]
                },
                "🤨": {
                    name: "¿Qué significa el emoji de la cara con ceja levantada?",
                    description: "Una cara con una ceja levantada. Significa escepticismo, desconfianza o no estar convencido de algo.",
                    synonyms: [
                        "escéptico", "dudoso", "desconfiado", "incrédulo", "suspicaz",
                        "receloso", "cauteloso", "sospechoso", "dubitativo", "cuestionador",
                        // Regionalismos
                        "mosqueado", "malicioso", "desconfiado", "receloso",
                        // Términos coloquiales
                        "no me la creo", "algo no cuadra", "mmm..."
                    ]
                },
                "🧐": {
                    name: "¿Qué significa el emoji de la cara con monóculo?",
                    description: "Una cara con monóculo y ceja levantada. Sugiere sofisticación, análisis detallado o curiosidad intelectual.",
                    synonyms: [
                        "sofisticado", "elegante", "intelectual", "refinado", "culto",
                        "analítico", "observador", "curioso", "detallista", "perspicaz",
                        // Regionalismos
                        "pijo", "fino", "distinguido", "letrado",
                        // Términos coloquiales
                        "sabiondo", "intelectualoide", "erudito"
                    ]
                },
                "🤓": {
                    name: "¿Qué significa el emoji de la cara de nerd?",
                    description: "Una cara sonriente con gafas gruesas de marco negro. Representa inteligencia, estudio o comportamiento 'nerd'.",
                    synonyms: [
                        // Características físicas
                        "gafas gruesas", "lentes grandes", "anteojos de pasta",
                        "gafas de marco negro", "lentes redondos", "gafas de empollón",
                        "cara con gafas grandes", "anteojos gruesos",
                        // Personalidad y estereotipos
                        "nerd", "estudioso", "inteligente", "empollón", "cerebrito",
                        "académico", "aplicado", "estudiantil", "listillo",
                        // Regionalismos
                        "traga", "matado", "chancón", "cerebro", "gafufo",
                        // Términos coloquiales
                        "come libros", "sabelotodo", "cuatro ojos",
                        // Elementos visuales
                        "gafas negras gruesas", "cara sonriente con anteojos", "emoji con lentes grandes"
                    ]
                },
                "😎": {
                    name: "¿Qué significa el emoji de la cara sonriente con gafas de sol?",
                    description: "Una cara sonriente con gafas de sol oscuras. Significa actitud cool, confianza o tranquilidad.",
                    synonyms: [
                        // Características físicas
                        "gafas de sol", "lentes oscuros", "lentes negros", "gafas negras",
                        "sonrisa con gafas", "cara con lentes", "anteojos oscuros",
                        // Actitud y expresión
                        "cool", "genial", "guay", "tranquilo", "relajado",
                        "confiado", "seguro", "chulo", "estiloso", "moderno",
                        // Regionalismos
                        "chévere", "bacán", "padre", "copado", "anteojos de sol",
                        // Términos coloquiales
                        "a todo dar", "de película", "lo máximo",
                        // Elementos visuales
                        "gafas negras", "cara amarilla con gafas", "emoji con lentes"
                    ]
                },
                "🤩": {
                    name: "¿Qué significa el emoji de la cara maravillada con estrellas?",
                    description: "Una cara sonriente con estrellas por ojos. Significa asombro, admiración o estar deslumbrado por algo o alguien.",
                    synonyms: [
                        "maravillado", "asombrado", "deslumbrado", "fascinado", "encantado",
                        "admirado", "impresionado", "extasiado", "entusiasmado", "alucinado",
                        // Regionalismos
                        "flipado", "embobado", "boquiabierto", "pasmado",
                        // Términos coloquiales
                        "con estrellas en los ojos", "flipando", "alucinando"
                    ]
                },
                "🥳": {
                    name: "¿Qué significa el emoji de la cara de fiesta?",
                    description: "Una cara sonriente con un gorro de fiesta y un silbato de fiesta. Representa celebración, fiesta o festejo.",
                    synonyms: [
                        "fiesta", "celebración", "festejo", "diversión", "alegría",
                        "juerga", "pachanga", "celebrando", "festejando", "parrandero",
                        // Regionalismos
                        "pachanga", "farra", "parranda", "jolgorio",
                        // Términos coloquiales
                        "de fiesta", "de juerga", "de rumba"
                    ]
                },
                "😏": {
                    name: "¿Qué significa el emoji de la cara con sonrisa pícara?",
                    description: "Una cara con una sonrisa torcida. Su significado es de satisfacción, picardía o insinuación.",
                    synonyms: [
                        "pícaro", "astuto", "malicioso", "insinuante", "sugerente",
                        "presumido", "confiado", "sagaz", "ladino", "travieso",
                        // Regionalismos
                        "pillín", "vivo", "avispado", "zorro",
                        // Términos coloquiales
                        "con segundas", "con doble sentido", "con malicia"
                    ]
                },
                "😒": {
                    name: "¿Qué significa el emoji de la cara de desagrado?",
                    description: "Una cara con ojos entrecerrados y boca torcida. Significa descontento, escepticismo o fastidio.",
                    synonyms: [
                        "desagrado", "fastidio", "molestia", "disgusto", "descontento",
                        "hartazgo", "irritación", "enfado", "molesto", "hastiado",
                        // Regionalismos
                        "harto", "empalago", "cansado", "aburrido",
                        // Términos coloquiales
                        "hasta la coronilla", "qué pesado", "qué fastidio"
                    ]
                },
                "😞": {
                    name: "¿Qué significa el emoji de la cara decepcionada?",
                    description: "Una cara con ojos y cejas caídas. Significa decepción, tristeza o pesar.",
                    synonyms: [
                        "decepcionado", "triste", "desilusionado", "apenado", "desanimado",
                        "desalentado", "abatido", "deprimido", "descorazonado", "afligido",
                        // Regionalismos
                        "bajoneado", "achicopalado", "agüitado", "desmoralizado",
                        // Términos coloquiales
                        "con el ánimo por los suelos", "por los suelos", "sin ánimos"
                    ]
                },
                "😔": {
                    name: "¿Qué significa el emoji de la cara pensativa?",
                    description: "Una cara con ojos cerrados y expresión pensativa. Significa reflexión, melancolía o preocupación.",
                    synonyms: [
                        "pensativo", "reflexivo", "meditabundo", "melancólico", "contemplativo",
                        "preocupado", "ensimismado", "absorto", "cabizbajo", "nostálgico",
                        // Regionalismos
                        "apachurrado", "acongojado", "pensando", "meditando",
                        // Términos coloquiales
                        "en las nubes", "en su mundo", "dándole vueltas"
                    ]
                },
                "😟": {
                    name: "¿Qué significa el emoji de la cara preocupada?",
                    description: "Una cara con cejas arqueadas hacia arriba y boca hacia abajo. Significa preocupación, angustia o inquietud.",
                    synonyms: [
                        "preocupado", "angustiado", "inquieto", "intranquilo", "ansioso",
                        "nervioso", "alarmado", "perturbado", "agobiado", "tenso",
                        // Regionalismos
                        "afligido", "acongojado", "mortificado", "preocupón",
                        // Términos coloquiales
                        "con el pendiente", "con el alma en un hilo", "hecho un manojo de nervios"
                    ]
                },
                "😕": {
                    name: "¿Qué significa el emoji de la cara confundida?",
                    description: "Una cara con cejas arqueadas y boca torcida. Significa confusión, duda o perplejidad.",
                    synonyms: [
                        "confundido", "perplejo", "desconcertado", "dudoso", "indeciso",
                        "desorientado", "perdido", "extrañado", "aturdido", "vacilante",
                        // Regionalismos
                        "mareado", "enredado", "confuso", "liado",
                        // Términos coloquiales
                        "sin enterarse", "no me entero", "estoy perdido"
                    ]
                },
                "🙁": {
                    name: "¿Qué significa el emoji de la cara ligeramente triste?",
                    description: "Una cara con cejas y boca ligeramente hacia abajo. Significa leve tristeza o descontento.",
                    synonyms: [
                        "triste", "descontento", "desanimado", "apagado", "decaído",
                        "afligido", "apenado", "desilusionado", "desalentado", "abatido",
                        // Regionalismos
                        "achantado", "alicaído", "mustio", "desganado",
                        // Términos coloquiales
                        "sin ánimo", "bajoneado", "regular"
                    ]
                },
                "☹️": {
                    name: "¿Qué significa el emoji de la cara triste?",
                    description: "Una cara con cejas y boca muy hacia abajo. Significa tristeza profunda o gran descontento.",
                    synonyms: [
                        "muy triste", "apenado", "afligido", "desconsolado", "abatido",
                        "deprimido", "desolado", "acongojado", "apesadumbrado", "entristecido",
                        // Regionalismos
                        "agüitado", "amargado", "achicopalado", "compungido",
                        // Términos coloquiales
                        "con el corazón roto", "hecho polvo", "destrozado"
                    ]
                },
                "😣": {
                    name: "¿Qué significa el emoji de la cara perseverante?",
                    description: "Una cara con ojos fuertemente cerrados. Significa perseverancia, esfuerzo o frustración.",
                    synonyms: [
                        "perseverante", "esforzado", "frustrado", "tenaz", "persistente",
                        "determinado", "empeñado", "obstinado", "luchador", "resistente",
                        // Regionalismos
                        "porfiado", "terco", "necio", "testarudo",
                        // Términos coloquiales
                        "dale que dale", "no se rinde", "echándole ganas"
                    ]
                },
                "😖": {
                    name: "¿Qué significa el emoji de la cara confundida y angustiada?",
                    description: "Una cara con ojos cerrados y boca torcida. Significa confusión extrema, angustia o frustración.",
                    synonyms: [
                        "angustiado", "frustrado", "desesperado", "agobiado", "estresado",
                        "abrumado", "saturado", "sobrepasado", "colapsado", "desbordado",
                        // Regionalismos
                        "agobiado", "superado", "reventado", "quemado",
                        // Términos coloquiales
                        "hasta arriba", "no puedo más", "saturadísimo"
                    ]
                },
                "😫": {
                    name: "¿Qué significa el emoji de la cara cansada?",
                    description: "Una cara con ojos cerrados y boca abierta. Significa cansancio extremo, agotamiento o frustración.",
                    synonyms: [
                        // Características físicas
                        "ojos cerrados", "boca abierta", "cara agotada",
                        "expresión exhausta", "rostro cansado", "cara con fatiga",
                        "gesto de cansancio", "cara con sueño",
                        // Estados físicos y emocionales
                        "cansado", "agotado", "exhausto", "fatigado", "rendido",
                        "extenuado", "desgastado", "reventado", "fundido",
                        // Regionalismos
                        "molido", "hecho polvo", "destrozado", "acabado",
                        // Términos coloquiales
                        "no doy más", "muerto de cansancio", "sin pilas",
                        // Elementos visuales
                        "emoji cansado", "cara de agotamiento", "rostro exhausto"
                    ]
                },
                "😩": {
                    name: "¿Qué significa el emoji de la cara agotada?",
                    description: "Una cara con ojos cerrados y boca abierta en gesto de lamento. Su significado es de agotamiento físico o emocional.",
                    synonyms: [
                        // Características físicas
                        "ojos cerrados", "boca abierta", "cara agotada",
                        "expresión de dolor", "gesto angustiado", "cara sufriendo",
                        "rostro afligido", "expresión de pena",
                        // Estados emocionales
                        "agotado", "exhausto", "destrozado", "deshecho", "consumido",
                        "sin fuerzas", "sin energía", "derrumbado", "desecho", "acabado",
                        // Regionalismos
                        "fundido", "reventado", "hecho trizas", "demolido",
                        // Términos coloquiales
                        "no puedo más", "sin batería", "en las últimas"
                    ]
                },
                "🥺": {
                    name: "¿Qué significa el emoji de la cara suplicante?",
                    description: "Una cara con ojos grandes y brillantes, cejas arqueadas hacia arriba. Significa súplica, ruego o ternura.",
                    synonyms: [
                        // Características físicas
                        "ojos grandes", "ojos brillantes", "cejas arqueadas",
                        "mirada tierna", "ojos de cachorro", "ojos suplicantes",
                        "cara con ojos grandes", "mirada dulce",
                        // Expresiones y emociones
                        "suplicante", "rogando", "implorando", "tierno", "conmovedor",
                        "lastimero", "pidiendo", "ruego", "súplica",
                        // Regionalismos
                        "ojitos", "carita", "pucheros", "mimoso",
                        // Términos coloquiales
                        "ojos de cachorro", "por favor", "carita de pena",
                        // Elementos visuales
                        "emoji con ojos grandes", "cara con mirada tierna", "rostro suplicante"
                    ]
                },
                "😢": {
                    name: "¿Qué significa el emoji de la cara llorando?",
                    description: "Una cara con una lágrima cayendo por la mejilla. Significa tristeza, pena o dolor emocional.",
                    synonyms: [
                        // Características físicas
                        "lágrima", "gota cayendo", "lágrima en la mejilla",
                        "cara con lágrima", "ojos llorosos", "mejilla mojada",
                        "cara amarilla llorando", "lágrima azul",
                        // Emociones y estados
                        "llorando", "triste", "apenado", "dolido", "lastimado",
                        "herido", "afligido", "desconsolado", "acongojado",
                        // Regionalismos
                        "lloroso", "lagrimoso", "sollozando", "gimiendo",
                        // Términos coloquiales
                        "con el corazón roto", "echo lágrimas", "con pena",
                        // Elementos visuales
                        "gota de lágrima", "cara con lágrima azul", "emoji llorando"
                    ]
                },
                "😭": {
                    name: "¿Qué significa el emoji de la cara llorando fuerte?",
                    description: "Una cara con ojos cerrados y lágrimas fluyendo abundantemente. Significa llanto intenso o dolor emocional profundo.",
                    synonyms: [
                        "llorando fuerte", "sollozando", "desconsolado", "destrozado", "devastado",
                        "desgarrado", "desolado", "desesperado", "angustiado", "sufriendo",
                        // Regionalismos
                        "llorando a mares", "hecho un mar de lágrimas", "desecho",
                        // Términos coloquiales
                        "llorando a moco tendido", "hecho un mar de lágrimas", "inconsolable"
                    ]
                },
                "😤": {
                    name: "¿Qué significa el emoji de la cara con vapor por la nariz?",
                    description: "Una cara con vapor saliendo por la nariz. Significa frustración, enfado o determinación.",
                    synonyms: [
                        // Características físicas
                        "vapor en la nariz", "humo por la nariz", "resoplando",
                        "nariz humeante", "cara echando vapor", "nariz con humo",
                        "rostro con vapor", "cara resoplando",
                        // Estados emocionales
                        "frustrado", "enfadado", "molesto", "irritado", "enojado",
                        "indignado", "furioso", "rabioso", "determinado",
                        // Regionalismos
                        "cabreado", "emberracado", "encabronado", "emputado",
                        // Términos coloquiales
                        "echando humo", "que echa chispas", "que revienta",
                        // Elementos visuales
                        "emoji con vapor", "cara con humo", "rostro echando vapor"
                    ]
                },
                "😠": {
                    name: "¿Qué significa el emoji de la cara enojada?",
                    description: "Una cara con cejas fruncidas y boca seria. Significa enojo, molestia o irritación.",
                    synonyms: [
                        "enojado", "molesto", "irritado", "enfadado", "furioso",
                        "disgustado", "indignado", "airado", "cabreado", "malhumorado",
                        // Regionalismos
                        "bravo", "emberracado", "encabronado", "emputado",
                        // Términos coloquiales
                        "de malas", "mosqueado", "que echa chispas"
                    ]
                },
                "😡": {
                    name: "¿Qué significa el emoji de la cara enojada roja?",
                    description: "Una cara roja con cejas fruncidas y boca seria. Significa ira intensa o furia.",
                    synonyms: [
                        // Características físicas
                        "cara roja", "cejas fruncidas", "ceño fruncido", 
                        "cara enrojecida", "rostro rojo", "cara colorada",
                        "expresión furiosa", "cara enfadada roja",
                        // Estados emocionales
                        "furioso", "iracundo", "colérico", "rabioso", "enfurecido",
                        "encolerizado", "furibundo", "enfadado", "irritado",
                        // Regionalismos
                        "emputecido", "encachimbado", "endemoniado", "encorajinado",
                        // Términos coloquiales
                        "echando fuego", "que arde", "que explota",
                        // Elementos visuales
                        "emoji rojo", "cara roja de ira", "rostro rojo enfadado"
                    ]
                },
                "🤬": {
                    name: "¿Qué significa el emoji de la cara maldiciendo?",
                    description: "Una cara roja con símbolos sobre la boca. Su significado es de ira extrema, maldiciones o palabras fuertes.",
                    synonyms: [
                        // Características físicas
                        "cara roja con símbolos", "boca censurada", "símbolos en boca",
                        "expresión furiosa", "cara enojada con símbolos",
                        "rostro enfurecido", "cara roja enfadada",
                        // Estados emocionales
                        "furioso", "enfurecido", "iracundo", "encolerizado",
                        "rabioso", "enfadado", "indignado", "colérico",
                        // Regionalismos
                        "emputecido", "cabreado", "encachimbado", "emberracado",
                        // Términos coloquiales
                        "echando rayos", "echando pestes", "maldiciendo",
                        // Elementos visuales
                        "emoji maldiciendo", "cara con censura", "símbolos de maldición"
                    ]
                },
                "🤯": {
                    name: "¿Qué significa el emoji de la cara explotando?",
                    description: "Una cara con la parte superior de la cabeza explotando. Significa asombro extremo, shock o sobrecarga mental.",
                    synonyms: [
                        // Características físicas
                        "cabeza explotando", "explosión en la cabeza", "mente estallando",
                        "cerebro volando", "cabeza abierta", "explosión mental",
                        "cara con explosión", "cabeza reventando",
                        // Estados mentales
                        "impactado", "asombrado", "atónito", "pasmado", "estupefacto",
                        "anonadado", "perplejo", "boquiabierto", "alucinado",
                        // Regionalismos
                        "flipado", "patidifuso", "turulato", "desconcertado",
                        // Términos coloquiales
                        "me explota la cabeza", "sin palabras", "alucinando",
                        // Elementos visuales
                        "explosión cerebral", "mente volando", "emoji con explosión"
                    ]
                },
                "😳": {
                    name: "¿Qué significa el emoji de la cara sonrojada?",
                    description: "Una cara con ojos muy abiertos y mejillas sonrojadas. Significa vergüenza, sorpresa o incomodidad.",
                    synonyms: [
                        // Características físicas
                        "mejillas rojas", "ojos abiertos", "cara ruborizada",
                        "rostro colorado", "expresión avergonzada", "cara roja",
                        // Estados emocionales
                        "avergonzado", "ruborizado", "apenado", "sonrojado",
                        "abochornado", "tímido", "cohibido", "turbado",
                        // Regionalismos
                        "achicopalado", "apachurrado", "cortado", "chiveado",
                        // Términos coloquiales
                        "rojo como un tomate", "colorado como un pimiento",
                        // Elementos visuales
                        "cara sonrojada", "mejillas coloradas", "rostro avergonzado"
                    ]
                },
                "🥵": {
                    name: "¿Qué significa el emoji de la cara acalorada?",
                    description: "Una cara roja con lengua afuera, sudando profusamente. Significa calor extremo, agobio térmico o excitación intensa.",
                    synonyms: [
                        // Características físicas
                        "cara roja", "sudando", "lengua afuera", "acalorado", "sofocado",
                        // Estados emocionales
                        "agobiado", "exhausto", "abrumado", "excitado", "ardiente",
                        // Regionalismos España
                        "achicharrado", "abrasado", "derretido", "asado",
                        // Regionalismos Latinoamérica
                        "acalambrado", "sofocón", "asolado", "enchilado",
                        // Términos coloquiales
                        "hirviendo", "quemando", "a fuego", "que arde",
                        // Elementos
                        "calor", "fiebre", "temperatura", "bochorno", "canícula"
                    ]
                },
                "🥶": {
                    name: "¿Qué significa el emoji de la cara helada?",
                    description: "Una cara azul temblando con dientes castañeteando. Significa frío extremo, congelación o una situación escalofriante.",
                    synonyms: [
                        // Características físicas
                        "cara azul", "temblando", "congelado", "tiritando", "helado",
                        // Estados emocionales
                        "aterido", "entumecido", "paralizado", "estremecido",
                        // Regionalismos España
                        "aterido", "gélido", "pasmado", "arrecido",
                        // Regionalismos Latinoamérica
                        "friolento", "escarchado", "congelado", "entumido",
                        // Términos coloquiales
                        "hecho un témpano", "como un polo", "más frío que el polo",
                        // Elementos
                        "hielo", "nieve", "escarcha", "glacial", "polar"
                    ]
                },
                "😱": {
                    name: "¿Qué significa el emoji de la cara gritando de miedo?",
                    description: "Una cara amarilla recreando el famoso cuadro 'El Grito' de Munch. Significa terror extremo, pánico o sorpresa impactante.",
                    synonyms: [
                        // Características físicas
                        "boca abierta", "mejillas alzadas", "ojos desorbitados", "manos en la cara",
                        // Estados emocionales
                        "aterrorizado", "horrorizado", "espantado", "pasmado", "impactado",
                        // Regionalismos España
                        "acojonado", "cagado de miedo", "muerto de miedo",
                        // Regionalismos Latinoamérica
                        "espantado", "aterrado", "asustado", "horrorizado",
                        // Términos coloquiales
                        "en pánico", "muerto del susto", "con el alma en vilo",
                        // Elementos
                        "grito", "terror", "pánico", "horror", "espanto"
                    ]
                },
                "😨": {
                    name: "¿Qué significa el emoji de la cara de miedo?",
                    description: "Una cara con ojos muy abiertos y cejas arqueadas hacia arriba. Significa miedo, ansiedad o preocupación intensa.",
                    synonyms: [
                        // Características físicas
                        "ojos abiertos", "cejas arqueadas", "boca tensa", "expresión asustada",
                        // Estados emocionales
                        "asustado", "temeroso", "inquieto", "alarmado", "perturbado",
                        // Regionalismos España
                        "acongojado", "amedrentado", "apurado",
                        // Regionalismos Latinoamérica
                        "asustadizo", "miedoso", "temeroso", "nervioso",
                        // Términos coloquiales
                        "con los pelos de punta", "con el corazón en la boca",
                        // Elementos
                        "miedo", "temor", "susto", "alarma", "sobresalto"
                    ]
                },
                "😰": {
                    name: "¿Qué significa el emoji de la cara preocupada con sudor?",
                    description: "Una cara azulada con sudor en la frente y boca abierta. Significa ansiedad, preocupación o nerviosismo intenso.",
                    synonyms: [
                        // Características físicas
                        "sudando frío", "cara azulada", "boca abierta", "gota de sudor",
                        // Estados emocionales
                        "ansioso", "preocupado", "nervioso", "angustiado", "intranquilo",
                        // Regionalismos España
                        "agobiado", "abrumado", "acongojado",
                        // Regionalismos Latinoamérica
                        "afligido", "mortificado", "inquieto", "preocupado",
                        // Términos coloquiales
                        "con el alma en un hilo", "sudando la gota gorda",
                        // Elementos
                        "sudor frío", "ansiedad", "preocupación", "angustia", "nervios"
                    ]
                },
                "😥": {
                    name: "¿Qué significa el emoji de la cara triste pero aliviada?",
                    description: "Una cara con cejas arqueadas, ojos cerrados y una gota de sudor, con expresión de alivio mezclado con tristeza.",
                    synonyms: [
                        // Características físicas
                        "ojos cerrados", "cejas arqueadas", "gota de sudor", "boca triste",
                        // Estados emocionales
                        "aliviado", "triste", "melancólico", "resignado", "desahogado",
                        // Regionalismos España
                        "apesadumbrado", "desconsolado", "reconfortado",
                        // Regionalismos Latinoamérica
                        "desganado", "achicopalado", "tranquilizado",
                        // Términos coloquiales
                        "con el alma en vilo", "con un peso menos",
                        // Elementos visuales
                        "lágrima", "sudor", "expresión de alivio"
                    ]
                },
                "😓": {
                    name: "¿Qué significa el emoji de la cara triste con sudor?",
                    description: "Una cara con ojos cerrados, cejas caídas y sudor en la frente, expresando agotamiento y tristeza.",
                    synonyms: [
                        // Características físicas
                        "sudoroso", "ojos cerrados", "cejas caídas", "gesto agotado",
                        // Estados emocionales
                        "exhausto", "agobiado", "estresado", "abrumado", "desanimado",
                        // Regionalismos España
                        "hecho polvo", "destrozado", "chafado",
                        // Regionalismos Latinoamérica
                        "agotado", "reventado", "fundido",
                        // Términos coloquiales
                        "sudando la gota gorda", "con el alma por los suelos",
                        // Elementos visuales
                        "sudor", "expresión agotada", "gesto de cansancio"
                    ]
                },
                "🤗": {
                    name: "¿Qué significa el emoji de la cara sonriente abrazando?",
                    description: "Una cara sonriente con manos abiertas que simulan un abrazo, expresando calidez y afecto.",
                    synonyms: [
                        // Características físicas
                        "brazos abiertos", "sonrisa cálida", "gesto acogedor", "manos extendidas",
                        // Estados emocionales
                        "cariñoso", "afectuoso", "acogedor", "amistoso", "reconfortante",
                        // Regionalismos España
                        "entrañable", "cercano", "majete",
                        // Regionalismos Latinoamérica
                        "amoroso", "apapachador", "chinchoso",
                        // Términos coloquiales
                        "dar un abrazo de oso", "achuchón",
                        // Elementos visuales
                        "abrazo", "gesto de cariño", "expresión acogedora"
                    ]
                },
                "🤔": {
                    name: "¿Qué significa el emoji de la cara pensando?",
                    description: "Una cara con ceja arqueada y mano en la barbilla, en gesto reflexivo y contemplativo.",
                    synonyms: [
                        // Características físicas
                        "mano en barbilla", "ceja arqueada", "gesto reflexivo", "mirada pensativa",
                        // Estados emocionales
                        "pensativo", "reflexivo", "contemplativo", "dubitativo", "analítico",
                        // Regionalismos España
                        "caviloso", "ensimismado", "meditabundo",
                        // Regionalismos Latinoamérica
                        "concentrado", "pensador", "filosófico",
                        // Términos coloquiales
                        "dándole vueltas", "rascándose la barbilla",
                        // Elementos visuales
                        "gesto pensativo", "expresión dudosa", "pose reflexiva"
                    ]
                },
                "🤭": {
                    name: "¿Qué significa el emoji de la cara sonrojada sobre la boca?",
                    description: "Una cara con ojos sonrientes y mano cubriendo una sonrisa, expresando timidez o picardía.",
                    synonyms: [
                        // Características físicas
                        "mano en boca", "ojos sonrientes", "mejillas sonrojadas", "gesto tímido",
                        // Estados emocionales
                        "travieso", "pícaro", "tímido", "juguetón", "avergonzado",
                        // Regionalismos España
                        "ruborizado", "cortado", "pillín",
                        // Regionalismos Latinoamérica
                        "penoso", "chaparro", "chismoso",
                        // Términos coloquiales
                        "con la risa floja", "tapándose la boca",
                        // Elementos visuales
                        "sonrojo", "gesto de sorpresa", "expresión pícara"
                    ]
                },
                "🤫": {
                    name: "¿Qué significa el emoji de la cara pidiendo silencio?",
                    description: "Una cara con dedo índice presionado contra los labios, indicando un gesto universal de silencio o secreto.",
                    synonyms: [
                        // Características físicas
                        "dedo en labios", "gesto de silencio", "expresión cómplice", "ojos alertas",
                        // Estados emocionales
                        "discreto", "sigiloso", "secretivo", "cómplice", "cauteloso",
                        // Regionalismos España
                        "calladito", "chitón", "mutis", "callado",
                        // Regionalismos Latinoamérica
                        "silencioso", "discreto", "calladito", "shhhh",
                        // Términos coloquiales
                        "boca cerrada", "ni mu", "calladito como una tumba",
                        // Elementos visuales
                        "dedo índice", "gesto de silencio", "expresión de complicidad"
                    ]
                },
                "🤥": {
                    name: "¿Qué significa el emoji de la cara de mentiroso?",
                    description: "Una cara con nariz larga, reminiscente de Pinocho, simbolizando mentira o engaño.",
                    synonyms: [
                        // Características físicas
                        "nariz larga", "nariz crecida", "cara de Pinocho", "expresión culpable",
                        // Estados emocionales
                        "mentiroso", "embustero", "engañoso", "falso", "deshonesto",
                        // Regionalismos España
                        "trola", "embustero", "fantasioso", "mentiras",
                        // Regionalismos Latinoamérica
                        "chamullero", "chismoso", "cuentero", "mitómano",
                        // Términos coloquiales
                        "cuenta cuentos", "más falso que Judas", "mentiroso compulsivo",
                        // Elementos visuales
                        "nariz creciente", "gesto culpable", "expresión sospechosa"
                    ]
                },
                "😶": {
                    name: "¿Qué significa el emoji de la cara sin boca?",
                    description: "Una cara amarilla sin boca, solo con ojos, expresando silencio, mudez o perplejidad.",
                    synonyms: [
                        // Características físicas
                        "sin boca", "ojos neutros", "cara lisa", "expresión muda",
                        // Estados emocionales
                        "mudo", "silencioso", "perplejo", "desconcertado", "sin palabras",
                        // Regionalismos España
                        "pasmado", "enmudecido", "cortado", "callado",
                        // Regionalismos Latinoamérica
                        "anonadado", "boquiabierto", "mudo", "sin habla",
                        // Términos coloquiales
                        "sin decir ni pío", "más mudo que una tumba", "sin voz",
                        // Elementos visuales
                        "ausencia de boca", "mirada fija", "expresión neutra"
                    ]
                },
                "😑": {
                    name: "¿Qué significa el emoji de la cara inexpresiva?",
                    description: "Una cara con ojos rectos y boca recta, mostrando total falta de expresión o emoción.",
                    synonyms: [
                        // Características físicas
                        "ojos rectos", "boca recta", "expresión neutral", "cara plana",
                        // Estados emocionales
                        "inexpresivo", "neutral", "impasible", "estoico", "indiferente",
                        // Regionalismos España
                        "soso", "impávido", "inalterable", "neutro",
                        // Regionalismos Latinoamérica
                        "serio", "desganado", "desinteresado", "apático",
                        // Términos coloquiales
                        "cara de póker", "cara de palo", "sin expresión",
                        // Elementos visuales
                        "líneas rectas", "expresión neutra", "gesto plano"
                    ]
                },
                "😵": {
                    name: "¿Qué significa el emoji de la cara mareada?",
                    description: "Una cara con ojos en espiral, expresando mareo, confusión o aturdimiento.",
                    synonyms: [
                        // Características físicas
                        "ojos en espiral", "expresión aturdida", "cara confusa", "gesto desorientado",
                        // Estados emocionales
                        "mareado", "aturdido", "confundido", "desorientado", "desconcertado",
                        // Regionalismos España
                        "flipado", "atontado", "atolondrado", "mareado",
                        // Regionalismos Latinoamérica
                        "pachuco", "turulato", "embobado", "noqueado",
                        // Términos coloquiales
                        "dando vueltas", "perdiendo el norte", "viendo estrellitas",
                        // Elementos visuales
                        "espirales", "expresión confusa", "gesto aturdido"
                    ]
                },
                "😬": {
                    name: "¿Qué significa el emoji de la cara con los dientes apretados?",
                    description: "Una cara mostrando todos los dientes en una mueca tensa, expresando nerviosismo, incomodidad o situación embarazosa.",
                    synonyms: [
                        // Características físicas
                        "dientes apretados", "mueca tensa", "sonrisa forzada", "gesto incómodo",
                        // Estados emocionales
                        "nervioso", "incómodo", "tenso", "ansioso", "embarazoso",
                        // Regionalismos España
                        "azorado", "violento", "apurado", "tenso",
                        // Regionalismos Latinoamérica
                        "incómodo", "nervioso", "tenso", "apretado",
                        // Términos coloquiales
                        "momento incómodo", "risa nerviosa", "sonrisa forzada",
                        // Elementos visuales
                        "mueca", "dientes visibles", "expresión tensa"
                    ]
                },
                "🙄": {
                    name: "¿Qué significa el emoji de la cara con los ojos hacia arriba?",
                    description: "Una cara con los ojos mirando hacia arriba en un gesto de exasperación, fastidio o incredulidad.",
                    synonyms: [
                        // Características físicas
                        "ojos hacia arriba", "mirada al cielo", "gesto exasperado", "expresión fastidiada",
                        // Estados emocionales
                        "exasperado", "fastidiado", "incrédulo", "hastiado", "cansado",
                        // Regionalismos España
                        "harto", "cansino", "pesado", "agobiado",
                        // Regionalismos Latinoamérica
                        "fastidiado", "cansado", "aburrido", "hastiado",
                        // Términos coloquiales
                        "dar vueltas los ojos", "poner los ojos en blanco", "mirada al techo",
                        // Elementos visuales
                        "ojos rodando", "mirada exasperada", "gesto de fastidio"
                    ]
                },
                "😮": {
                    name: "¿Qué significa el emoji de la cara con la boca abierta?",
                    description: "Una cara con la boca formando una O perfecta. Significa sorpresa, asombro o estado de shock.",
                    synonyms: [
                        // Características físicas
                        "boca abierta", "boca redonda", "cara sorprendida",
                        "rostro asombrado", "expresión de sorpresa", "gesto de asombro",
                        // Estados emocionales
                        "sorprendido", "asombrado", "impactado", "atónito",
                        "pasmado", "boquiabierto", "estupefacto",
                        // Regionalismos
                        "anonadado", "patidifuso", "ojiplático", "alelado",
                        // Términos coloquiales
                        "con la boca abierta", "sin palabras", "flipando",
                        "en shock", "impresionado",
                        // Elementos visuales
                        "emoji sorprendido", "cara asombrada", "rostro impactado"
                    ]
                },
                "😲": {
                    name: "¿Qué significa el emoji de la cara con la boca abierta asombrada?",
                    description: "Una cara con ojos muy abiertos y boca en forma de O. Su significado es de asombro intenso o sorpresa extrema.",
                    synonyms: [
                        // Características físicas
                        "ojos grandes", "boca muy abierta", "cara impactada",
                        "rostro asombrado", "expresión de shock", "gesto de impacto",
                        // Estados emocionales
                        "asombrado", "impactado", "atónito", "perplejo",
                        "maravillado", "estupefacto", "pasmado",
                        // Regionalismos
                        "boquiabierto", "pasmado", "turulato", "azorado",
                        // Términos coloquiales
                        "sin palabras", "en shock total", "flipando en colores",
                        "con la boca abierta", "alucinando",
                        // Elementos visuales
                        "emoji asombrado", "cara impactada", "rostro maravillado"
                    ]
                },
                "🥱": {
                    name: "¿Qué significa el emoji de la cara bostezando?",
                    description: "Una cara con la boca muy abierta bostezando y ojos cerrados. Significa cansancio, aburrimiento o somnolencia.",
                    synonyms: [
                        // Características físicas
                        "bostezando", "boca abierta", "ojos cerrados",
                        "cara somnolienta", "expresión de sueño", "gesto de bostezo",
                        // Estados emocionales
                        "cansado", "somnoliento", "adormilado", "agotado",
                        "aburrido", "fatigado", "exhausto",
                        // Regionalismos
                        "muerto de sueño", "rendido", "molido", "fundido",
                        // Términos coloquiales
                        "con sueño", "que me duermo", "cayéndose de sueño",
                        "necesito café", "sin energía",
                        // Elementos visuales
                        "emoji bostezando", "cara con sueño", "rostro cansado"
                    ]
                },
                "😴": {
                    name: "¿Qué significa el emoji de la cara durmiendo?",
                    description: "Una cara dormida con ojos cerrados y una burbuja saliendo de la nariz. Representa el acto de dormir o un estado de aburrimiento profundo.",
                    synonyms: [
                        // Características físicas
                        "dormido", "ojos cerrados", "burbuja en la nariz",
                        "cara dormida", "expresión relajada", "gesto de sueño",
                        // Estados emocionales
                        "dormido", "relajado", "tranquilo", "descansando",
                        "inconsciente", "plácido", "sereno",
                        // Regionalismos
                        "roncando", "sobando", "jetón", "dormitando",
                        // Términos coloquiales
                        "en los brazos de Morfeo", "en el quinto sueño",
                        "durmiendo a pierna suelta", "echando la siesta",
                        // Elementos visuales
                        "emoji dormido", "cara durmiendo", "rostro descansando"
                    ]
                },
                "🤤": {
                    name: "¿Qué significa el emoji de la cara con baba?",
                    description: "Una cara con la boca entreabierta y un hilo de baba. Su significado es de deseo intenso por algo, generalmente comida, o un estado de ensoñación.",
                    synonyms: [
                        // Características físicas
                        "babeando", "boca entreabierta", "saliva cayendo",
                        "cara deseosa", "expresión anhelante", "gesto de antojo",
                        // Estados emocionales
                        "deseoso", "antojado", "hambriento", "ansioso",
                        "codicioso", "anhelante", "embobado",
                        // Regionalismos
                        "baboso", "antojado", "goloso", "hambriento",
                        // Términos coloquiales
                        "se me hace agua la boca", "me lo como con los ojos",
                        "muero de ganas", "qué rico",
                        // Elementos visuales
                        "emoji babeando", "cara con antojo", "rostro deseoso"
                    ]
                },
                "😪": {
                    name: "¿Qué significa el emoji de la cara adormilada?",
                    description: "Una cara con expresión somnolienta y una burbuja de moco. Representa somnolencia, cansancio o aburrimiento.",
                    synonyms: [
                        // Características físicas
                        "somnoliento", "ojos entrecerrados", "burbuja de moco",
                        "cara cansada", "expresión adormilada", "gesto de sueño",
                        // Estados emocionales
                        "cansado", "adormilado", "soñoliento", "agotado",
                        "exhausto", "fatigado", "amodorrado",
                        // Regionalismos
                        "modorro", "amodorrado", "dormitando", "cabeceando",
                        // Términos coloquiales
                        "que me duermo", "con sueño", "sin energía",
                        "necesito dormir", "cayéndose de sueño",
                        // Elementos visuales
                        "emoji adormilado", "cara con sueño", "rostro cansado"
                    ]
                },
                "🤐": {
                    name: "¿Qué significa el emoji de la cara con boca cerrada por cremallera?",
                    description: "Una cara con una cremallera en lugar de boca. Su significado es mantener silencio o guardar un secreto.",
                    synonyms: [
                        // Características físicas
                        "boca con cremallera", "boca cerrada", "cara silenciada",
                        "rostro sellado", "boca sellada", "cara con cierre",
                        // Estados emocionales
                        "silencioso", "callado", "discreto", "reservado", "prudente",
                        "hermético", "contenido", "mudo", "sigiloso",
                        // Regionalismos
                        "calladito", "cerrado", "sellado", "mudo",
                        // Términos coloquiales
                        "boca cerrada", "labios sellados", "sin decir palabra",
                        "guardando secretos", "no diré nada",
                        // Elementos visuales
                        "emoji con cremallera", "cara con cierre", "boca con zipper"
                    ]
                },
                "🤢": {
                    name: "¿Qué significa el emoji de la cara nauseabunda?",
                    description: "Una cara verde con expresión de náusea o asco. Significa malestar físico o repulsión ante algo.",
                    synonyms: [
                        // Características físicas
                        "cara verde", "expresión de asco", "rostro enfermo",
                        "cara mareada", "expresión nauseabunda", "gesto de repulsión",
                        // Estados emocionales
                        "asqueado", "nauseabundo", "mareado", "repugnado", "indispuesto",
                        "enfermo", "descompuesto", "revuelto",
                        // Regionalismos
                        "empachado", "maluco", "desguañangado", "pachuco",
                        // Términos coloquiales
                        "con el estómago revuelto", "verde del asco",
                        "con ganas de vomitar", "mal cuerpo",
                        // Elementos visuales
                        "emoji verde", "cara de asco", "rostro nauseabundo"
                    ]
                },
                "🤮": {
                    name: "¿Qué significa el emoji de la cara vomitando?",
                    description: "Una cara verde vomitando. Representa el acto de vomitar o una reacción extrema de asco o repulsión.",
                    synonyms: [
                        // Características físicas
                        "vomitando", "cara verde", "boca abierta",
                        "rostro enfermo", "cara expulsando", "gesto de vómito",
                        // Estados emocionales
                        "asqueado", "repugnado", "indispuesto", "enfermo",
                        "nauseabundo", "descompuesto", "revuelto",
                        // Regionalismos
                        "guacareando", "arrojando", "devolviendo", "echando",
                        // Términos coloquiales
                        "echando la pota", "echando la hueva",
                        "sacando todo", "botando el almuerzo",
                        // Elementos visuales
                        "emoji vomitando", "cara con vómito", "rostro expulsando"
                    ]
                },
                "🤧": {
                    name: "¿Qué significa el emoji de la cara estornudando?",
                    description: "Una cara estornudando con un pañuelo. Representa un resfriado, alergia o el acto de estornudar.",
                    synonyms: [
                        // Características físicas
                        "estornudando", "cara con pañuelo", "nariz congestionada",
                        "rostro resfriado", "cara con alergia", "gesto de estornudo",
                        // Estados emocionales
                        "resfriado", "enfermo", "alérgico", "congestionado",
                        "indispuesto", "achacoso", "constipado",
                        // Regionalismos
                        "acatarrado", "agripado", "enmocado", "trancado",
                        // Términos coloquiales
                        "achís", "salud", "con la nariz tapada",
                        "moqueando", "con gripe",
                        // Elementos visuales
                        "emoji estornudando", "cara resfriada", "rostro con pañuelo"
                    ]
                },
                "🥴": {
                    name: "¿Qué significa el emoji de la cara mareada?",
                    description: "Una cara con expresión desorientada y ojos desalineados. Representa mareo, confusión o estado de embriaguez.",
                    synonyms: [
                        // Características físicas
                        "ojos desalineados", "sonrisa torcida", "cara desorientada",
                        "rostro confuso", "expresión aturdida", "gesto mareado",
                        // Estados emocionales
                        "mareado", "confundido", "aturdido", "desorientado",
                        "embriagado", "atontado", "desconcertado",
                        // Regionalismos
                        "borracho", "ebrio", "pedo", "chispado",
                        // Términos coloquiales
                        "dando vueltas", "con la cabeza dando vueltas",
                        "medio cocido", "tocado", "pasado de copas",
                        // Elementos visuales
                        "emoji mareado", "cara confusa", "rostro aturdido"
                    ]
                },
                "😷": {
                    name: "¿Qué significa el emoji de la cara con mascarilla?",
                    description: "Una cara usando una mascarilla médica. Su significado es de protección contra enfermedades, precaución sanitaria o estar enfermo.",
                    synonyms: [
                        // Características físicas
                        "mascarilla médica", "tapabocas", "cubrebocas",
                        "rostro protegido", "cara cubierta", "máscara sanitaria",
                        // Estados emocionales
                        "precavido", "protegido", "cuidadoso", "preventivo",
                        "consciente", "responsable", "cauteloso",
                        // Regionalismos
                        "barbijo", "nasobuco", "mascareta", "tapaboca",
                        // Términos coloquiales
                        "con la máscara", "protegido", "cuidándose",
                        "evitando contagios", "prevenido",
                        // Elementos visuales
                        "emoji con mascarilla", "cara protegida", "rostro con máscara"
                    ]
                },
                "🤒": {
                    name: "¿Qué significa el emoji de la cara con termómetro?",
                    description: "Una cara con expresión enferma y un termómetro. Significa estar enfermo, tener fiebre o malestar físico.",
                    synonyms: [
                        // Características físicas
                        "termómetro", "cara enferma", "rostro febril",
                        "expresión doliente", "gesto enfermizo", "cara con fiebre",
                        // Estados emocionales
                        "enfermo", "febril", "indispuesto", "débil",
                        "decaído", "maltrecho", "convaleciente",
                        // Regionalismos
                        "afiebrado", "acalenturado", "maluco", "pachuco",
                        // Términos coloquiales
                        "con temperatura", "con calentura", "malo",
                        "en cama", "con gripe",
                        // Elementos visuales
                        "emoji enfermo", "cara con termómetro", "rostro febril"
                    ]
                },
                "🤕": {
                    name: "¿Qué significa el emoji de la cara con vendaje?",
                    description: "Una cara con un vendaje en la cabeza. Significa estar herido, lesionado o en recuperación de una lesión.",
                    synonyms: [
                        // Características físicas
                        "vendaje", "venda en la cabeza", "cara vendada",
                        "rostro lastimado", "cabeza vendada", "herida cubierta",
                        // Estados emocionales
                        "herido", "lastimado", "adolorido", "lesionado",
                        "accidentado", "golpeado", "magullado",
                        // Regionalismos
                        "machucado", "aporreado", "maltrecho", "cascado",
                        // Términos coloquiales
                        "con un chichón", "vendado", "accidentado",
                        "golpeado", "con curita",
                        // Elementos visuales
                        "emoji vendado", "cara herida", "rostro con vendaje"
                    ]
                },
                "🤑": {
                    name: "¿Qué significa el emoji de la cara con ojos de dinero?",
                    description: "Una cara con signos de dólar en los ojos y lengua fuera. Significa codicia, amor por el dinero o éxito financiero.",
                    synonyms: [
                        // Características físicas
                        "ojos de dólar", "lengua fuera", "cara codiciosa",
                        "rostro ambicioso", "expresión avara", "gesto de riqueza",
                        // Estados emocionales
                        "codicioso", "ambicioso", "avaricioso", "materialista",
                        "rico", "adinerado", "próspero",
                        // Regionalismos
                        "forrado", "platudo", "billetudo", "acaudalado",
                        // Términos coloquiales
                        "con dinero", "con pasta", "con plata",
                        "millonario", "con billetes",
                        // Elementos visuales
                        "emoji rico", "cara con dinero", "rostro codicioso"
                    ]
                },
                "🤠": {
                    name: "¿Qué significa el emoji de la cara con sombrero vaquero?",
                    description: "Una cara sonriente con sombrero de vaquero. Significa espíritu aventurero, estilo western o actitud despreocupada.",
                    synonyms: [
                        // Características físicas
                        "sombrero vaquero", "cara cowboy", "rostro western",
                        "sonrisa vaquera", "expresión aventurera", "gesto country",
                        // Estados emocionales
                        "aventurero", "intrépido", "valiente", "despreocupado",
                        "relajado", "confiado", "audaz",
                        // Regionalismos
                        "ranchero", "gaucho", "llanero", "charro",
                        // Términos coloquiales
                        "cowboy", "vaquero", "del oeste",
                        "pistolero", "sheriff",
                        // Elementos visuales
                        "emoji vaquero", "cara western", "rostro country"
                    ]
                },
                "😈": {
                    name: "¿Qué significa el emoji del diablo sonriente?",
                    description: "Una cara sonriente púrpura con cuernos. Significa picardía, travesura o tener intenciones maliciosas de forma juguetona.",
                    synonyms: [
                        // Características físicas
                        "cuernos", "cara púrpura", "sonrisa maliciosa",
                        "rostro diabólico", "expresión traviesa", "gesto pícaro",
                        // Estados emocionales
                        "travieso", "pícaro", "malicioso", "juguetón",
                        "bromista", "astuto", "diabólico",
                        // Regionalismos
                        "diablillo", "demonio", "cachudo", "cornudo",
                        // Términos coloquiales
                        "haciendo maldades", "con malas intenciones",
                        "tramando algo", "siendo malo",
                        // Elementos visuales
                        "emoji diablo", "cara diabólica", "rostro malicioso"
                    ]
                },
                "👿": {
                    name: "¿Qué significa el emoji del diablo enojado?",
                    description: "Una cara púrpura enfadada con cuernos. Significa enojo intenso, maldad o intenciones maliciosas serias.",
                    synonyms: [
                        // Características físicas
                        "cuernos", "cara púrpura", "ceño fruncido",
                        "rostro enfadado", "expresión malvada", "gesto amenazante",
                        // Estados emocionales
                        "enojado", "malvado", "furioso", "amenazante",
                        "vengativo", "rencoroso", "hostil",
                        // Regionalismos
                        "endemoniado", "enfurecido", "embravecido", "iracundo",
                        // Términos coloquiales
                        "echando chispas", "echando humo",
                        "con malas pulgas", "del demonio",
                        // Elementos visuales
                        "emoji demonio", "cara maligna", "rostro diabólico"
                    ]
                },
                "👹": {
                    name: "¿Qué significa el emoji del ogro?",
                    description: "Una cara roja con colmillos y expresión feroz, basada en el oni japonés. Significa ferocidad, monstruosidad o fuerza intimidante.",
                    synonyms: [
                        // Características físicas
                        "cara roja", "colmillos", "rostro monstruoso",
                        "expresión feroz", "gesto amenazante", "rasgos demoníacos",
                        // Estados emocionales
                        "feroz", "intimidante", "monstruoso", "temible",
                        "amenazante", "aterrador", "terrorífico",
                        // Regionalismos
                        "oni", "demonio japonés", "monstruo", "bestia",
                        // Términos coloquiales
                        "cara de ogro", "monstruo terrible",
                        "criatura temible", "bestia feroz",
                        // Elementos visuales
                        "emoji ogro", "cara monstruosa", "rostro demoníaco"
                    ]
                },
                "🤡": {
                    name: "¿Qué significa el emoji del payaso?",
                    description: "Una cara de payaso con maquillaje colorido, nariz roja y pelo rizado. Representa diversión, entretenimiento o situaciones cómicas, aunque también puede usarse irónicamente.",
                    synonyms: [
                        // Características físicas
                        "maquillaje de payaso", "nariz roja", "pelo rizado",
                        "cara pintada", "sonrisa exagerada", "mejillas rojas",
                        // Estados emocionales
                        "divertido", "gracioso", "entretenido", "festivo",
                        "cómico", "burlón", "juguetón",
                        // Regionalismos
                        "bufón", "arlequín", "saltimbanqui", "augusto",
                        // Términos coloquiales
                        "hacer el payaso", "payasear", "bromista",
                        "hacer reír", "animador",
                        // Elementos visuales
                        "emoji payaso", "cara de payaso", "rostro circense"
                    ]
                },
                "💩": {
                    name: "¿Qué significa el emoji de la popo?",
                    description: "Una pila de excremento marrón con ojos y sonrisa amigable. Se usa para representar situaciones desagradables o como forma humorística de expresar frustración.",
                    synonyms: [
                        // Características físicas
                        "montón marrón", "ojos sonrientes", "expresión alegre",
                        "forma espiral", "textura suave", "aspecto caricaturesco",
                        // Estados emocionales
                        "desagradable", "humorístico", "frustrante", "molesto",
                        "incómodo", "fastidioso", "irritante",
                        // Regionalismos
                        "caca", "excremento", "deposición", "heces",
                        // Términos coloquiales
                        "popó", "caquita", "mojón",
                        "plasta", "porquería",
                        // Elementos visuales
                        "emoji popo", "cara sonriente marrón", "emoticono fecal"
                    ]
                },
                "👻": {
                    name: "¿Qué significa el emoji del fantasma?",
                    description: "Un fantasma blanco y amigable con ojos grandes y negros. Representa lo sobrenatural, el misterio o situaciones fantasmales de manera juguetona.",
                    synonyms: [
                        // Características físicas
                        "forma espectral", "cuerpo blanco", "ojos negros",
                        "silueta flotante", "aspecto etéreo", "forma ondulante",
                        // Estados emocionales
                        "misterioso", "juguetón", "travieso", "sobrenatural",
                        "enigmático", "intrigante", "fantasmal",
                        // Regionalismos
                        "espectro", "aparición", "ánima", "espíritu",
                        // Términos coloquiales
                        "fantasmita", "alma en pena", "aparecido",
                        "espanto", "ser del más allá",
                        // Elementos visuales
                        "emoji fantasma", "cara espectral", "figura flotante"
                    ]
                },
                "💀": {
                    name: "¿Qué significa el emoji de la calavera?",
                    description: "Una calavera humana blanca vista de frente. Simboliza la muerte, el peligro o puede usarse en contextos humorísticos relacionados con situaciones extremas.",
                    synonyms: [
                        // Características físicas
                        "cráneo blanco", "cuencas vacías", "mandíbula ósea",
                        "estructura ósea", "dientes expuestos", "forma craneal",
                        // Estados emocionales
                        "mortal", "peligroso", "amenazante", "letal",
                        "fatal", "extremo", "terminal",
                        // Regionalismos
                        "muerte", "testa", "cráneo", "esqueleto",
                        // Términos coloquiales
                        "calaca", "huesuda", "parca",
                        "la pelona", "la muerte",
                        // Elementos visuales
                        "emoji calavera", "símbolo mortal", "icono de muerte"
                    ]
                },
                "☠️": {
                    name: "¿Qué significa el emoji de la calavera con huesos cruzados?",
                    description: "Una calavera blanca con dos huesos cruzados debajo. Símbolo tradicional de peligro o veneno, también conocido como 'jolly roger' en contexto pirata.",
                    synonyms: [
                        // Características físicas
                        "calavera y tibias", "huesos cruzados", "símbolo pirata",
                        "emblema tóxico", "señal de peligro", "marca mortal",
                        // Estados emocionales
                        "peligroso", "mortal", "tóxico", "amenazante",
                        "letal", "nocivo", "venenoso",
                        // Regionalismos
                        "bandera pirata", "jolly roger", "símbolo de veneno", "peligro de muerte",
                        // Términos coloquiales
                        "calavera pirata", "símbolo tóxico", "señal de peligro",
                        "marca de veneno", "advertencia mortal",
                        // Elementos visuales
                        "emoji veneno", "símbolo pirata", "advertencia de muerte"
                    ]
                },
                "👽": {
                    name: "¿Qué significa el emoji del alienígena verde?",
                    description: "Un rostro extraterrestre gris-verdoso con ojos grandes y negros. Representa lo extraterrestre, lo desconocido o situaciones fuera de lo común.",
                    synonyms: [
                        // Características físicas
                        "cabeza grande", "ojos negros", "piel verdosa",
                        "rostro alienígena", "forma ovalada", "rasgos extraterrestres",
                        // Estados emocionales
                        "extraño", "misterioso", "desconocido", "inusual",
                        "foráneo", "extraordinario", "singular",
                        // Regionalismos
                        "extraterrestre", "marciano", "ser espacial", "visitante",
                        // Términos coloquiales
                        "ET", "marcianito", "hombrecito verde",
                        "ser de otro planeta", "alien",
                        // Elementos visuales
                        "emoji alien", "cara extraterrestre", "rostro espacial"
                    ]
                },
                "👾": {
                    name: "¿Qué significa el emoji del monstruo de videojuegos?",
                    description: "Un alienígena pixelado de color morado inspirado en los videojuegos arcade clásicos. Representa la cultura gamer y la nostalgia por los videojuegos retro.",
                    synonyms: [
                        // Características físicas
                        "forma pixelada", "color morado", "diseño retro",
                        "aspecto arcade", "estilo 8-bits", "alien videojuego",
                        // Estados emocionales
                        "nostálgico", "lúdico", "divertido", "retro",
                        "jugador", "gamer", "arcade",
                        // Regionalismos
                        "marciano pixelado", "invasor espacial", "alien de juego", "monstruo digital",
                        // Términos coloquiales
                        "bicho de arcade", "monstruito", "invasor",
                        "enemigo del juego", "sprite",
                        // Elementos visuales
                        "emoji videojuego", "alien arcade", "monstruo 8-bits"
                    ]
                },
                "🤖": {
                    name: "¿Qué significa el emoji del robot?",
                    description: "Un rostro robótico metálico con antena. Representa la tecnología, la automatización o comportamientos mecánicos y poco naturales.",
                    synonyms: [
                        // Características físicas
                        "cara metálica", "antena", "ojos artificiales",
                        "rostro mecánico", "aspecto androide", "diseño futurista",
                        // Estados emocionales
                        "automático", "mecánico", "artificial", "tecnológico",
                        "programado", "sistemático", "robótico",
                        // Regionalismos
                        "androide", "autómata", "máquina", "bot",
                        // Términos coloquiales
                        "robotcito", "máquina", "aparato",
                        "ser artificial", "chatbot",
                        // Elementos visuales
                        "emoji robot", "cara mecánica", "rostro artificial"
                    ]
                },
                "🎃": {
                    name: "¿Qué significa el emoji de la calabaza de Halloween?",
                    description: "Una calabaza naranja tallada con rostro iluminado, típica de Halloween. Representa la festividad de Halloween, lo espeluznante o lo festivo-terrorífico.",
                    synonyms: [
                        // Características físicas
                        "calabaza tallada", "rostro iluminado", "color naranja",
                        "ojos triangulares", "sonrisa dentada", "jack-o'-lantern",
                        // Estados emocionales
                        "festivo", "espeluznante", "terrorífico", "divertido",
                        "misterioso", "juguetón", "tenebroso",
                        // Regionalismos
                        "calabaza de Halloween", "linterna de Jack", "calabaza fantasma", "farola de calabaza",
                        // Términos coloquiales
                        "calabacita", "jack-o'-lantern", "calabaza terrorífica",
                        "decoración Halloween", "calabaza fantasma",
                        // Elementos visuales
                        "emoji Halloween", "calabaza tallada", "linterna festiva"
                    ]
                },
                "😺": {
                    name: "¿Qué significa el emoji del gato sonriendo?",
                    description: "Un rostro de gato amarillo con una sonrisa amplia y ojos abiertos. Representa felicidad, optimismo o situaciones positivas desde una perspectiva felina.",
                    synonyms: [
                        // Características físicas
                        "cara de gato", "sonrisa felina", "ojos brillantes",
                        "expresión alegre", "bigotes", "orejas puntiagudas",
                        // Estados emocionales
                        "feliz", "contento", "alegre", "optimista",
                        "juguetón", "animado", "entusiasta",
                        // Regionalismos
                        "minino", "gatito", "felino", "michino",
                        // Términos coloquiales
                        "gatito feliz", "michi contento", "gato sonriente",
                        "mascota alegre", "felino contento",
                        // Elementos visuales
                        "emoji gato", "cara felina", "rostro gatuno"
                    ]
                },
                "😸": {
                    name: "¿Qué significa el emoji del gato sonriendo con ojos cerrados?",
                    description: "Un rostro de gato amarillo con una amplia sonrisa y ojos cerrados en forma de arco. Representa alegría intensa, satisfacción o risa contenida.",
                    synonyms: [
                        // Características físicas
                        "gato sonriente", "ojos cerrados", "expresión feliz",
                        "sonrisa amplia", "cara felina", "gesto alegre",
                        // Estados emocionales
                        "alegre", "risueño", "divertido", "satisfecho",
                        "contento", "jubiloso", "radiante",
                        // Regionalismos de España
                        "gato contento", "minino feliz", "gato risueño",
                        // Regionalismos de Latinoamérica
                        "michi alegre", "gatito sonriente", "felino contento",
                        // Términos coloquiales
                        "gato feliz", "michi risueño", "gatito gracioso",
                        "felino divertido", "mascota alegre",
                        // Elementos visuales
                        "emoji gato feliz", "cara de gato sonriente", "felino con sonrisa"
                    ]
                },
                "😹": {
                    name: "¿Qué significa el emoji del gato riendo con lágrimas?",
                    description: "Un rostro de gato amarillo con ojos cerrados, boca abierta y lágrimas de risa. Representa diversión extrema, carcajadas o algo extremadamente gracioso.",
                    synonyms: [
                        // Características físicas
                        "gato riendo", "lágrimas de risa", "ojos cerrados",
                        "boca abierta", "expresión hilarante", "cara felina divertida",
                        // Estados emocionales
                        "divertido", "hilarante", "carcajada", "gracioso",
                        "entretenido", "jocoso", "risueño",
                        // Regionalismos de España
                        "gato desternillado", "minino carcajeándose", "gato partiéndose de risa",
                        // Regionalismos de Latinoamérica
                        "michi muerto de risa", "gatito cagado de risa", "felino a carcajadas",
                        // Términos coloquiales
                        "gato llorando de risa", "michi atacado", "gatito desternillado",
                        "felino muerto de risa", "mascota divertida",
                        // Elementos visuales
                        "emoji gato riendo", "cara de gato con lágrimas", "felino carcajeándose"
                    ]
                },
                "😻": {
                    name: "¿Qué significa el emoji del gato con ojos de corazón?",
                    description: "Un rostro de gato amarillo con ojos en forma de corazón y sonrisa. Representa amor, admiración o estar enamorado desde una perspectiva felina.",
                    synonyms: [
                        // Características físicas
                        "gato enamorado", "ojos de corazón", "mirada amorosa",
                        "expresión adorable", "cara felina cariñosa", "sonrisa tierna",
                        // Estados emocionales
                        "enamorado", "amoroso", "adoración", "cariñoso",
                        "encantado", "fascinado", "cautivado",
                        // Regionalismos de España
                        "gato enamoradizo", "minino embelesado", "gato encandilado",
                        // Regionalismos de Latinoamérica
                        "michi enamorado", "gatito flechado", "felino cautivado",
                        // Términos coloquiales
                        "gato con amor", "michi enamoradizo", "gatito derretido",
                        "felino embobado", "mascota enamorada",
                        // Elementos visuales
                        "emoji gato enamorado", "cara de gato con corazones", "felino amoroso"
                    ]
                },
                "😼": {
                    name: "¿Qué significa el emoji del gato con sonrisa pícara?",
                    description: "Un rostro de gato amarillo con una sonrisa torcida y ojos entrecerrados. Representa astucia, picardía o una actitud traviesa y maliciosa.",
                    synonyms: [
                        // Características físicas
                        "gato astuto", "sonrisa torcida", "ojos entrecerrados",
                        "expresión pícara", "cara felina maliciosa", "gesto travieso",
                        // Estados emocionales
                        "pícaro", "astuto", "malicioso", "insinuante", "sugerente",
                        "presumido", "confiado", "sagaz", "ladino", "travieso",
                        // Regionalismos de España
                        "gato pillo", "minino truhán", "gato socarrón",
                        // Regionalismos de Latinoamérica
                        "michi pícaro", "gatito travieso", "felino mañoso",
                        // Términos coloquiales
                        "gato mañoso", "michi tramposo", "gatito astuto",
                        "felino pillo", "mascota traviesa",
                        // Elementos visuales
                        "emoji gato pícaro", "cara de gato astuto", "felino malicioso"
                    ]
                },
                "😽": {
                    name: "¿Qué significa el emoji del gato dando beso?",
                    description: "Un rostro de gato amarillo con ojos cerrados y labios fruncidos enviando un beso. Representa afecto, cariño o un gesto de amor tierno.",
                    synonyms: [
                        // Características físicas
                        "gato besando", "labios fruncidos", "ojos cerrados",
                        "expresión cariñosa", "cara felina afectuosa", "gesto amoroso",
                        // Estados emocionales
                        "cariñoso", "afectuoso", "tierno", "amoroso",
                        "dulce", "romántico", "encantador",
                        // Regionalismos de España
                        "gato mimoso", "minino besucón", "gato cariñoso",
                        // Regionalismos de Latinoamérica
                        "michi besucón", "gatito amoroso", "felino tierno",
                        // Términos coloquiales
                        "gato cariñoso", "michi tierno", "gatito besucón",
                        "felino amoroso", "mascota afectuosa",
                        // Elementos visuales
                        "emoji gato besando", "cara de gato con beso", "felino cariñoso"
                    ]
                },
                "🙀": {
                    name: "¿Qué significa el emoji del gato asustado con sus garras en la cara?",
                    description: "Un rostro de gato amarillo con expresión de shock, ojos muy abiertos y garras en las mejillas. Representa miedo intenso, sorpresa o pánico.",
                    synonyms: [
                        // Características físicas
                        "gato asustado", "garras en cara", "ojos abiertos",
                        "expresión de shock", "cara felina aterrada", "gesto de pánico",
                        // Estados emocionales
                        "asustado", "aterrado", "sorprendido", "alarmado",
                        "horrorizado", "espantado", "pasmado",
                        // Regionalismos de España
                        "gato espantado", "minino aterrorizado", "gato acojonado",
                        // Regionalismos de Latinoamérica
                        "michi asustado", "gatito espantado", "felino aterrado",
                        // Términos coloquiales
                        "gato en pánico", "michi horrorizado", "gatito asustadizo",
                        "felino alarmado", "mascota espantada",
                        // Elementos visuales
                        "emoji gato asustado", "cara de gato con miedo", "felino aterrorizado"
                    ]
                },
                "😿": {
                    name: "¿Qué significa el emoji del gato llorando con una lágrima en la cara?",
                    description: "Un rostro de gato amarillo con expresión triste y una lágrima cayendo. Representa tristeza, pena o desconsuelo desde una perspectiva felina.",
                    synonyms: [
                        // Características físicas
                        "gato llorando", "lágrima cayendo", "ojos tristes",
                        "expresión afligida", "cara felina apenada", "gesto melancólico",
                        // Estados emocionales
                        "triste", "apenado", "melancólico", "afligido",
                        "desconsolado", "abatido", "deprimido",
                        // Regionalismos de España
                        "gato apenado", "minino triste", "gato compungido",
                        // Regionalismos de Latinoamérica
                        "michi triste", "gatito llorón", "felino desconsolado",
                        // Términos coloquiales
                        "gato llorón", "michi triste", "gatito afligido",
                        "felino apenado", "mascota desconsolada",
                        // Elementos visuales
                        "emoji gato triste", "cara de gato llorando", "felino con lágrima"
                    ]
                },
                "😾": {
                    name: "¿Qué significa el emoji del gato enojado?",
                    description: "Un rostro de gato amarillo con ceño fruncido y expresión de enfado. Representa molestia, irritación o indignación desde una perspectiva felina.",
                    synonyms: [
                        // Características físicas
                        "gato enfadado", "ceño fruncido", "mirada molesta",
                        "expresión irritada", "cara felina enojada", "gesto de disgusto",
                        // Estados emocionales
                        "enfadado", "molesto", "irritado", "indignado",
                        "furioso", "enojado", "disgustado",
                        // Regionalismos de España
                        "gato cabreado", "minino enfurruñado", "gato mosqueado",
                        // Regionalismos de Latinoamérica
                        "michi enojado", "gatito molesto", "felino emberracado",
                        // Términos coloquiales
                        "gato gruñón", "michi enfurruñado", "gatito malhumorado",
                        "felino irritado", "mascota enojada",
                        // Elementos visuales
                        "emoji gato enojado", "cara de gato con enfado", "felino molesto"
                    ]
                },
                "🤲": {
                    name: "¿Qué significa el emoji de las manos abiertas hacia arriba?",
                    description: "Dos manos con las palmas hacia arriba, juntas como en posición de súplica o rezo. Representa petición, oración o disposición para recibir algo.",
                    synonyms: [
                        // Características físicas
                        "palmas hacia arriba", "manos juntas", "gesto de súplica",
                        "posición de rezo", "manos abiertas", "palmas unidas",
                        // Estados emocionales
                        "suplicante", "devoto", "esperanzado", "receptivo",
                        "humilde", "espiritual", "respetuoso",
                        // Regionalismos de España
                        "manos en oración", "gesto de súplica", "postura de ruego",
                        // Regionalismos de Latinoamérica
                        "manos rezando", "gesto de petición", "posición de plegaria",
                        // Términos coloquiales
                        "manos suplicantes", "gesto de rezo", "postura de petición",
                        "manos pidiendo", "gesto humilde",
                        // Elementos visuales
                        "emoji manos abiertas", "palmas hacia arriba", "gesto de oración"
                    ]
                },
                "👐": {
                    name: "¿Qué significa el emoji de las manos abiertas?",
                    description: "Dos manos con las palmas abiertas y separadas. Representa apertura, sinceridad o disposición para dar y recibir.",
                    synonyms: [
                        // Características físicas
                        "palmas extendidas", "manos separadas", "gesto abierto",
                        "posición receptiva", "manos desplegadas", "palmas mostradas",
                        // Estados emocionales
                        "abierto", "sincero", "franco", "receptivo",
                        "generoso", "transparente", "honesto",
                        // Regionalismos de España
                        "manos francas", "gesto de apertura", "postura sincera",
                        // Regionalismos de Latinoamérica
                        "manos abiertas", "gesto de honestidad", "posición de franqueza",
                        // Términos coloquiales
                        "a carta abierta", "sin nada que esconder", "con las manos abiertas",
                        "sin tapujos", "con total sinceridad",
                        // Elementos visuales
                        "emoji manos abiertas", "palmas extendidas", "gesto de apertura"
                    ]
                },
                "👏": {
                    name: "¿Qué significa el emoji de las manos aplaudiendo?",
                    description: "Dos manos en posición de aplauso. Representa aprobación, celebración, reconocimiento o ánimo hacia algo o alguien.",
                    synonyms: [
                        // Características físicas
                        "palmas chocando", "manos aplaudiendo", "gesto de aplauso",
                        "posición de celebración", "manos juntas", "palmas golpeando",
                        // Estados emocionales
                        "aprobador", "celebrativo", "entusiasta", "animado",
                        "admirativo", "congratulatorio", "elogioso",
                        // Regionalismos de España
                        "dar palmas", "batir palmas", "ovacionar",
                        // Regionalismos de Latinoamérica
                        "aplaudir", "echar porras", "dar un aplauso",
                        // Términos coloquiales
                        "dar palmadas", "echar un aplauso", "palmotear",
                        "dar un reconocimiento", "celebrar con palmas",
                        // Elementos visuales
                        "emoji aplausos", "manos aplaudiendo", "gesto de aprobación"
                    ]
                }
            }
        },
        animals: {
            title: "Animales y naturaleza",
            emojis: ["🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼"]
        },
        food: {
            title: "Alimentos y bebidas",
            emojis: ["☕", "🍺", "🍷", "🍕", "🍔", "🍟", "🌮", "🌯"]
        },
        activities: {
            title: "Actividades",
            emojis: ["⚽", "🏀", "🏈", "⚾", "🎾", "🏐", "🏉", "🎱"]
        },
        travel: {
            title: "Viajes y lugares",
            emojis: ["🚗", "🚕", "🚙", "🚌", "🚎", "🏎", "🚓", "🚑"]
        },
        objects: {
            title: "Objetos",
            emojis: ["📱", "💻", "⌚", "📷", "📞", "💡", "🔋", "🔌"]
        },
        symbols: {
            title: "Símbolos",
            emojis: ["❤️", "💔", "💫", "⭐", "✨", "💥", "🔥", "💯"]
        },
        flags: {
            title: "Banderas",
            emojis: ["🏳️", "🏴", "🏁", "🚩", "🏳️‍🌈", "🏳️‍⚧️", "🇪🇸", "🇲🇽"]
        }
    }
};

// Estado de la aplicación
let recentEmojis = new Set(emojiData.categories.recent.emojis);

// Funciones de utilidad
function normalizeText(text) {
    return text.toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

// Inicialización de la interfaz
function initializeCategories() {
    const peopleEmojisContainer = document.getElementById('peopleEmojis');
    const recentEmojisContainer = document.getElementById('recentEmojis');

    // Inicializar emojis recientes
    Array.from(recentEmojis).forEach(emoji => {
        const emojiElement = createEmojiElement(emoji);
        recentEmojisContainer.appendChild(emojiElement);
    });

    // Inicializar emojis de personas
    emojiData.categories.people.emojis.forEach(emoji => {
        const emojiElement = createEmojiElement(emoji);
        peopleEmojisContainer.appendChild(emojiElement);
    });
}

function createEmojiElement(emoji) {
    const div = document.createElement('div');
    div.className = 'emoji-item';
    div.textContent = emoji;
    div.setAttribute('role', 'button');
    div.setAttribute('aria-label', emojiData.categories.people.keywords[emoji]?.name || emoji);
    div.addEventListener('click', () => selectEmoji(emoji));
    return div;
}

// Manejo de emojis
function selectEmoji(emoji) {
    const emojiInfo = emojiData.categories.people.keywords[emoji];
    if (emojiInfo) {
        document.querySelector('.selected-emoji').textContent = emoji;
        document.querySelector('.emoji-name').textContent = emojiInfo.name;
        document.querySelector('.emoji-description').textContent = emojiInfo.description;
        updateRecentEmojis(emoji);
    }
}

function updateRecentEmojis(emoji) {
    recentEmojis.delete(emoji);
    recentEmojis.add(emoji);
    
    // Mantener solo los 5 más recientes
    if (recentEmojis.size > 5) {
        recentEmojis = new Set(Array.from(recentEmojis).slice(-5));
    }
    
    // Actualizar la visualización
    const recentEmojisContainer = document.getElementById('recentEmojis');
    recentEmojisContainer.innerHTML = '';
    Array.from(recentEmojis).forEach(emoji => {
        const emojiElement = createEmojiElement(emoji);
        recentEmojisContainer.appendChild(emojiElement);
    });
}

// Búsqueda
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    const peopleEmojisContainer = document.getElementById('peopleEmojis');

    searchInput.addEventListener('input', (e) => {
        const searchTerm = normalizeText(e.target.value);
        const emojis = emojiData.categories.people.emojis;

        peopleEmojisContainer.innerHTML = '';

        emojis.forEach(emoji => {
            const emojiInfo = emojiData.categories.people.keywords[emoji];
            if (emojiInfo) {
                const searchableText = normalizeText([
                    emojiInfo.name,
                    emojiInfo.description,
                    ...emojiInfo.synonyms
                ].join(' '));

                if (searchTerm === '' || searchableText.includes(searchTerm)) {
                    const emojiElement = createEmojiElement(emoji);
                    peopleEmojisContainer.appendChild(emojiElement);
                }
            }
        });
    });
}

// Copiar emoji
function setupCopyButton() {
    const copyButton = document.querySelector('.copy-button');
    copyButton.addEventListener('click', async () => {
        const emoji = document.querySelector('.selected-emoji').textContent;
        try {
            await navigator.clipboard.writeText(emoji);
            copyButton.classList.add('copied');
            setTimeout(() => copyButton.classList.remove('copied'), 1000);
        } catch (err) {
            console.error('Error al copiar:', err);
        }
    });
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    initializeCategories();
    setupSearch();
    setupCopyButton();
});