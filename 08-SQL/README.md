# Intro to SQL

What is SQL? 
- SQL stands for Structured Query Language

What is SQL use for?
- Store / persist information
- Manipulate that information

What kind of operations can we do in SQL
Some specific actions that we can do are CRUD actions, a common acronym we’ll see throughout the program, web development, and computing in general:

- Create data
- Read data
- Update data
- Delete data


1. Install the SQLite Browser if you haven't already [here](http://sqlitebrowser.org/)
2. Open the SQLite Browser and click 'File -> Open DataBase'
3. Choose the `chinook.db` file from this repo. This database is open source and maintained by Microsoft (SQL is no fun if you don't have any data)
4. Click the tab that says 'Execute SQL'. Type SQL queries in the box above. Press the play button. See the results of that query in the box below

## Challenges

1. Write the SQL to return all of the rows in the artists table?

```SQL
  SELECT name FROM artists

```

2. Write the SQL to select the artist with the name "Black Sabbath"

```
  SELECT id FROM artists WHERE name is "Black Sabbath"
```

3. Write the SQL to create a table named 'fans' with an autoincrementing ID that's a primary key and a name field of type text

```sql
  CREATE TABLE fans (
    id INTEGER PRIMARY KEY,
    name TEXT
  )
```

4. Write the SQL to alter the fans table to have a artist_id column type integer?

```sql
ALTER TABLE fans ADD COLUMN artist_id INTEGER

```

5. Write the SQL to add yourself as a fan of the Black Eyed Peas? ArtistId **169**

```sql
  INSERT INTO fans (name, artist_id) VALUES ("Graham", 169)
```


6. Write the SQL to return fans that are not fans of the black eyed peas.

```sql
  SELECT * FROM fans WHERE artist_id != 169

```

7. Write the SQL to display an artists name next to their album title

```sql
  SELECT artists.name, albums.title FROM artists LEFT OUTER JOIN albums ON artists.id = albums.artist_id

```


## BONUS (very hard)

11. I want to return the names of the artists and their number of rock tracks
    who play Rock music
    and have move than 30 tracks
    in order of the number of rock tracks that they have
    from greatest to least

```sql
  SELECT artists.name, COUNT (tracks.name) FROM artists INNER JOIN albums ON artists.id = albums.artist_id JOIN tracks ON albums.id = tracks.album_id WHERE tracks.genre_id = 1 GROUP BY artists.name HAVING COUNT (tracks.name) > 30 ORDER BY COUNT (tracks.name) DESC

```
