# Near earth object tracker

Using NASA's NeoWs (Near Earth Object Web Service) to give a list of all objects passing by earth on any given day. Pick a date and see what's coming our way.

This project was created as part of a learning series I'm hosting for coders coming from the humanities and arts.

To run locally, create a `config.js` file in the root directory. Add this code to the file, replacing `<your_key>` with your own NASA API key:

```
const config = {
  API_KEY: "<your_key>",
};
```

[NASA](https://api.nasa.gov/)
