# FleetManagement-UI

This repository contains the front-end applications for the Fleet Management user interface. It is composed of two separate Vite-powered React projects, each serving a distinct operational purpose.

## Projects

1.  [Sats-Alerts-Overview](#sats-alerts-overview)
2.  [Service-Country](#service-country)

---

### `Sats-Alerts-Overview`

#### Functionality

This project is a comprehensive Network Operations Center (NOC) dashboard designed for the detailed, real-time monitoring of a single satellite asset (`satellite3633`). It provides operators with a data-rich, split-screen interface to quickly assess asset health and investigate incidents.

Key features include:
- **Alerts Table**: Displays active and recent alerts over the last 24 hours.
- **Asset Overview**: A collection of cards showing critical information such as permanent failures, software versions, operational concerns, and satellite metadata.
- **Incident Timeline**: A detailed, interactive timeline for a specific incident (`INC-33995`), tracking evaluations, automated actions, comments, and associated alerts.
- **Dark-Themed UI**: Built for continuous monitoring in a control room environment.

#### Tech Stack

- **Framework**: React (with Vite)
- **Language**: TypeScript
- **Styling**: Tailwind CSS

#### Installation and Setup

To run this project locally, follow these steps:

1.  **Navigate to the project directory:**
    ```sh
    cd Sats-Alerts-Overview
    ```

2.  **Install dependencies:**
    ```sh
    npm install
    ```

3.  **Start the development server:**
    ```sh
    npm run dev
    ```

---

### `Service-Country`

#### Functionality

This project is a workflow management application used to view and manage operational work items. It allows users to filter a list of workflows based on specific criteria (e.g., country code) and view the results in a clear, tabular format. The application's state, particularly for filters, is managed via URL search parameters for easy sharing and bookmarking of views.

Key features include:
- **Filterable Workflow Table**: Displays a list of work items with details like ID, status, and creation date.
- **Dynamic Filtering**: Allows users to apply and clear filters, which update the table in real-time.
- **URL-based State Management**: Utilizes `react-router-dom` to persist filter state in the URL.

#### Tech Stack

- **Framework**: React (with Vite)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM

#### Installation and Setup

To run this project locally, follow these steps:

1.  **Navigate to the project directory:**
    ```sh
    cd Service-Country
    ```

2.  **Install dependencies:**
    ```sh
    npm install
    ```

3.  **Start the development server:**
    ```sh
    npm run dev
    ```