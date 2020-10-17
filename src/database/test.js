const database = require('./db')
const saveOrphanage = require('./saveOrphanage')

database.then(async db => {
    //inserir dados na tabela
    await saveOrphanage(db, {
        lat: "-27.221755",
        lng: "-49.6458612",
        name: "lar dos meninos",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp:"988754432",
        images: [
            "https://images.unsplash.com/photo-1600712243189-aaa2152723b4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1597387126034-0026d138e5dc?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas: Das 8 até 18",
        open_on_weekends: "1"
    })
    //consultar dados na tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)
    //consultar só um orfanato
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"')
    console.log(orphanage)
})
