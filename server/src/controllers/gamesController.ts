import { Request, Response } from 'express';
import pool from '../database';

class GamesController{

    public async list(req:Request,res:Response){
        const games = await pool.query('SELECT * FROM game');
        res.json(games);
    }

    public async getOne(req:Request,res:Response): Promise<any>{
        const game = await pool.query('SELECT * FROM game WHERE id=?',[req.params.id]);
        if(game.length > 0){
            return res.json(game);
        }
        res.status(404).json({message: "The game doesn't exists"});
    }

    public async create(req:Request,res:Response): Promise<void>{
        await pool.query('INSERT INTO game SET ?',[req.body]);
        res.json({message: 'Game Saved'});
    }

    public async update(req:Request,res:Response){
        await pool.query('UPDATE game SET ? WHERE id=?',[req.body,req.params.id]);
        res.json({message: 'Updated a game'});
    }

    public async delete(req:Request,res:Response){
        await pool.query('DELETE FROM game WHERE id=?',[req.params.id]);
        res.json({message: 'The game was deleted'});
    }

}

export const gamesController = new GamesController();