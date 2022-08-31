package com.techelevator.model;
import javax.persistence.*;

@Entity
@Table(name = "dateTime")
public class DateTime {

    //TO-DO, Primary and Foreign Keys: NEED PRIMARY KEY

    @Column(name = "Breakfast")
    private boolean Breakfast;

    @Column(name = "Lunch")
    private boolean Lunch;

    @Column(name = "Dinner")
    private boolean Dinner;

    @Column(name = "Snacks")
    private boolean Snacks;

    @Column(name = "Sunday")
    private boolean Sunday;

    @Column(name = "Monday")
    private boolean Monday;

    @Column(name = "Tuesday")
    private boolean Tuesday;

    @Column(name = "Wednesday")
    private boolean Wednesday;

    @Column(name = "Thursday")
    private boolean Thursday;

    @Column(name = "Friday")
    private boolean Friday;

    @Column(name = "Saturday")
    private boolean Saturday;

}
