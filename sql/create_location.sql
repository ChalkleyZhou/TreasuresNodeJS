drop table if exists `location`;  
create table `location` (
	`id`  			int 		not null 	auto_increment,
    `name`  		char(20) 	not null,
    `description`	char(200)	not null,
    `latitude`		numeric(10,7) not null,
    `longitude`   	numeric(10,7) not null,
    PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8;  