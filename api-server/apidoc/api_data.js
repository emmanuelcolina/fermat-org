define({ "api": [
  {
    "type": "get",
    "url": "/v1/auth/login",
    "title": "",
    "name": "Login",
    "group": "Auth",
    "description": "<p>Register the user and returns the authorization to use the api.</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"_id\": \"56b8c4c4288ff76e0f8225d3\",\n  \"_usr_id\": \"object usr\",\n  \"_app_id\": \"object app\",\n  \"axs_key\": \"56b8c4c4288ff76e0f8225d1\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/v1/auth/index.js",
    "groupTitle": "Auth"
  },
  {
    "type": "get",
    "url": "/v1/auth/logout",
    "title": "",
    "name": "Logout",
    "group": "Auth",
    "description": "<p>Removes the token.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isLogout",
            "description": "<p>It indicates that the token has been removed.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/v1/auth/index.js",
    "groupTitle": "Auth"
  },
  {
    "type": "get",
    "url": "/v1/net/nodes/:hash/childrn",
    "title": "",
    "name": "GetChildren",
    "group": "Net",
    "description": "<p>Descripcion.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Hash",
            "optional": false,
            "field": "hash",
            "description": "<p>[description].</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "[type]",
            "optional": true,
            "field": "description",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/v1/net/index.js",
    "groupTitle": "Net"
  },
  {
    "type": "get",
    "url": "/v1/net/servrs",
    "title": "",
    "name": "GetServer",
    "group": "Net",
    "description": "<p>[description].</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "[type]",
            "optional": true,
            "field": "description",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/v1/net/index.js",
    "groupTitle": "Net"
  },
  {
    "type": "get",
    "url": "/v1/repo/manifest/check",
    "title": "",
    "name": "CheckManifest",
    "group": "REPO",
    "description": "<p>[description].</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "[type]",
            "optional": true,
            "field": "description",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/v1/repo/index.js",
    "groupTitle": "REPO"
  },
  {
    "type": "get",
    "url": "/v1/repo/book",
    "title": "",
    "name": "GetBook",
    "group": "REPO",
    "description": "<p>Get the contents of the book fermat.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "[type]",
            "optional": true,
            "field": "description",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/v1/repo/index.js",
    "groupTitle": "REPO"
  },
  {
    "type": "get",
    "url": "/v1/repo/comps",
    "title": "",
    "name": "GetComps",
    "group": "REPO",
    "description": "<p>[description].</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "[type]",
            "optional": true,
            "field": "description",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/v1/repo/index.js",
    "groupTitle": "REPO"
  },
  {
    "type": "get",
    "url": "/v1/repo/devs",
    "title": "",
    "name": "GetDevs",
    "group": "REPO",
    "description": "<p>Get information from the developers involved in the repository fermat.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "[type]",
            "optional": true,
            "field": "description",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/v1/repo/index.js",
    "groupTitle": "REPO"
  },
  {
    "type": "get",
    "url": "/v1/repo/docs/:type",
    "title": "",
    "name": "GetDocs",
    "group": "REPO",
    "description": "<p>Get the contents of the readme fermat.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Represents the type of documentation (book, readme, paper).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "[type]",
            "optional": true,
            "field": "description",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/v1/repo/index.js",
    "groupTitle": "REPO"
  },
  {
    "type": "get",
    "url": "/v1/repo/procs",
    "title": "",
    "name": "GetProcs",
    "group": "REPO",
    "description": "<p>[description].</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "[type]",
            "optional": true,
            "field": "description",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/v1/repo/index.js",
    "groupTitle": "REPO"
  },
  {
    "type": "get",
    "url": "/v1/repo/readme",
    "title": "",
    "name": "GetReadme",
    "group": "REPO",
    "description": "<p>Get the contents of the readme of fermat.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "[type]",
            "optional": true,
            "field": "description",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/v1/repo/index.js",
    "groupTitle": "REPO"
  },
  {
    "type": "get",
    "url": "/v1/repo/comps/reload",
    "title": "",
    "name": "Reload",
    "group": "REPO",
    "description": "<p>[description].</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "[type]",
            "optional": true,
            "field": "description",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/v1/repo/index.js",
    "groupTitle": "REPO"
  }
] });
