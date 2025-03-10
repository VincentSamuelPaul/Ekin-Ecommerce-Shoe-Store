package main

import (
	"database/sql"
	"log"
	"net/http"
	"strconv"
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	_ "github.com/mattn/go-sqlite3"
)

var routes = map[string]string{
	"getshoes": "GET",
}

func getRoutes(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, routes)
}

var URL = "http://127.0.0.1:8000/"

var DB *sql.DB

type Shoe struct {
	Id    int    `json:"id"`
	Name  string `json:"name"`
	Desc  string `json:"desc"`
	Price int    `json:"price"`
	Type  string `json:"type"`
	Link  string `json:"link"`
}

type Order struct {
	Id       int    `json:"id"`
	Name     string `json:"name"`
	Desc     string `json:"desc"`
	Price    int    `json:"price"`
	Link     string `json:"link"`
	Size     int    `json:"size"`
	Username string `json:"username"`
}

type User struct {
	Username string `json:"username"`
	Password string `json:"password"`
	Found    bool
}

func getShoes(c *gin.Context) {
	var shoes []Shoe
	var shoe Shoe
	DB, err := sql.Open("sqlite3", "./data.db")
	if err != nil {
		log.Println(err)
	}
	query := `SELECT * FROM SHOES;`
	data, err := DB.Query(query)
	if err != nil {
		log.Println(err)
	}
	defer DB.Close()
	var _id int
	var _name string
	var _desc string
	var _price int
	var _type string
	var _link string
	for data.Next() {
		data.Scan(&_id, &_name, &_desc, &_price, &_type, &_link)
		shoe.Id = _id
		shoe.Name = _name
		shoe.Desc = _desc
		shoe.Price = _price
		shoe.Type = _type
		shoe.Link = _link
		shoes = append(shoes, shoe)
	}
	c.JSON(http.StatusOK, shoes)
}

func createOrder(c *gin.Context) {
	var orders []Order
	if err := c.ShouldBindJSON(&orders); err != nil {
		log.Println(err)
	}
	DB, err := sql.Open("sqlite3", "./data.db")
	if err != nil {
		log.Println(err)
	}
	defer DB.Close()
	for _, order := range orders {
		query := "INSERT INTO ORDERS(name, desc, price, link, size, username) VALUES ('" + order.Name + "','" + order.Desc + "'," + strconv.Itoa(order.Price) + ",'" + order.Link + "','" + strconv.Itoa(order.Size) + "','" + order.Username + "');"
		_, err := DB.Exec(query)
		if err != nil {
			log.Println(err)
		}
	}
	c.JSON(http.StatusOK, gin.H{"order": orders})
}

func getOrders(c *gin.Context) {
	var user map[string]string
	if err := c.ShouldBindJSON(&user); err != nil {
		log.Println(err)
	}
	var orders []Order
	var order Order
	DB, err := sql.Open("sqlite3", "./data.db")
	if err != nil {
		log.Println(err)
	}
	query := "SELECT * FROM ORDERS WHERE username = '" + user["username"] + "';"
	data, err := DB.Query(query)
	if err != nil {
		log.Println(err)
	}
	defer DB.Close()
	var _id int
	var _name string
	var _desc string
	var _price int
	var _link string
	var _username string
	var _size int
	for data.Next() {
		data.Scan(&_id, &_name, &_desc, &_price, &_link, &_username, &_size)
		order.Id = _id
		order.Name = _name
		order.Desc = _desc
		order.Price = _price
		order.Link = _link
		order.Username = _username
		order.Size = _size
		orders = append(orders, order)
	}
	c.JSON(http.StatusOK, orders)
}

func login(c *gin.Context) {
	var user User
	if err := c.ShouldBindJSON(&user); err != nil {
		log.Println(err)
	}
	DB, err := sql.Open("sqlite3", "./data.db")
	if err != nil {
		log.Println(err)
	}
	query := "SELECT * FROM USERS;"
	data, err := DB.Query(query)
	defer DB.Close()
	if err != nil {
		log.Println(err)
	}
	var username string
	var password string
	for data.Next() {
		data.Scan(&username, &password)
		if username == user.Username && password == user.Password {
			user.Found = true
			break
		} else {
			user.Found = false
		}
	}
	if user.Found {
		c.JSON(http.StatusOK, gin.H{"status": true, "name": username})
	} else {
		c.JSON(http.StatusOK, gin.H{"status": false})
	}
}

func signup(c *gin.Context) {
	var user User
	if err := c.ShouldBindJSON(&user); err != nil {
		log.Println(err)
	}
	DB, err := sql.Open("sqlite3", "./data.db")
	if err != nil {
		log.Println(err)
	}
	query := "INSERT INTO USERS VALUES('" + user.Username + "','" + user.Password + "');"
	_, err = DB.Exec(query)
	defer DB.Close()
	if err != nil {
		log.Println(err)
		c.JSON(http.StatusOK, gin.H{"status": false})
	} else {
		c.JSON(http.StatusOK, gin.H{"status": true, "name": user.Username})
	}
}

func main() {

	router := gin.Default()

	config := cors.DefaultConfig()
	config.AllowAllOrigins = true
	config.AllowMethods = []string{"POST", "GET", "PUT", "OPTIONS"}
	config.AllowHeaders = []string{"Origin", "Content-Type", "Authorization", "Accept", "User-Agent", "Cache-Control", "Pragma"}
	config.ExposeHeaders = []string{"Content-Length"}
	config.AllowCredentials = true
	config.MaxAge = 12 * time.Hour
	router.Use(cors.New(config))

	router.GET("/routes", getRoutes)
	router.GET("/getshoes", getShoes)
	router.POST("/createorders", createOrder)
	router.POST("/getorders", getOrders)
	router.POST("/login", login)
	router.POST("/signup", signup)
	router.Static("/shoes", "./photos")
	router.Run(":8000")
}
