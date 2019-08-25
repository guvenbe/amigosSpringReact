package com.amigoscode.demo.datasource;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.sql.DataSource;


@Configuration
public class Datasource {

    @Bean
    @ConfigurationProperties(prefix = "app.datasource")
    public DataSource postgresDataSource(){
        return DataSourceBuilder
                .create()
                .build();
    }



}
