# Portfolio & Blog

A portfolio and blog built with Astro v3, TypeScript, Tailwind CSS, and MDX.

## Project Structure

```
├───public
│ ├───fonts # Custom fonts
│ ├───patterns # Background patterns
│ ├───skills # Skills section assets
│ └───social # Social icons
└───src
├───components # Reusable components
├───content
│ ├───authors # Author information
│ ├───blogs # Blog content in MDX
│ └───projects # Project information
├───layouts # Layout components
├───lib # Helper functions
├───pages # Pages
│ ├───blog
│ └───projects
├───types # TypeScript types
└───utils # Utility functions
```


## Getting Started

1. Clone the repo
    ```sh
    git clone https://github.com/modecode22/new-moncef.git
    cd new-moncef
    ```

2. Install dependencies
    ```sh
    yarn install
    ```

3. Setup environment variables
    - Create a `.env` file in the root directory.
    - Fill in your credentials:
    ```makefile
    MY_EMAIL=yourappemail@gmail.com
    MY_PASSWORD=yourapppassword
    ```

    > See [this](https://support.google.com/mail/answer/185833?hl=en) for generating app passwords.

4. Run the app
    ```sh
    yarn dev
    ```
