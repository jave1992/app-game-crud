CREATE DATABASE ng_games_db;

USE ng_games_db;

CREATE TABLE game(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(180),
    description VARCHAR(255),
    image VARCHAR(200),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT  INTO `game`(`id`,`title`,`description`,`image`,`created_at`) VALUES (2,'Clash of Clans','Game of SUPERCELL','https://pmcvariety.files.wordpress.com/2018/07/clash.png?w=1000&h=563&crop=1','2019-01-25 16:48:43');
INSERT  INTO `game`(`id`,`title`,`description`,`image`,`created_at`) VALUES (4,'Clash Royale','Game of SUPERCELL','http://wrmx00.epimg.net/radio/imagenes/2017/10/10/tecnologia/1507658708_954109_1507659110_noticia_normal.jpg','2019-01-28 15:36:51');
