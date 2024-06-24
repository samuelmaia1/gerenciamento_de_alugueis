import pg from 'pg'
const {Client} = pg

import express from 'express'

const app = express()

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

import cors from 'cors'
app.use(cors())

app.post('/materiais', async (req, res) => {

    try {
        async function insertMarials(description, rent_price, reposition_price, id_material_type){
            const client = new Client({
                user: 'postgres',
                host: 'localhost',
                database: 'secao03',
                password: 'postgres'
            })

            await client.connect()

            const sqlInsertCommand = `
                INSERT INTO materiais (descricao, preco_aluguel, preco_reposicao, id_tipos_material) VALUES ($1, $2, $3, $4)
            `

            const values = [description, rent_price, reposition_price, id_material_type]

            const result = await client.query(sqlInsertCommand, values)

            if (result.rowCount === 1){
                console.log('Adicionado com sucesso.')
            } else {
                console.error('Erro ao adicionar produto')
            }

            
        }

        const {descricao, preco_aluguel, preco_reposicao, id_tipos_material} = req.body 

        const response = await insertMarials(descricao, preco_aluguel, preco_reposicao, id_tipos_material)

        res.json(response)

        await client.end()

    } catch (error) {
        console.log('Erro: ', error)
    }
    
})

app.listen(3000, () => {
    console.log('Rodando servidor')
})