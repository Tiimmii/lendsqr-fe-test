// Define the prop types for the DashboardHeader component
export type DashboardHeaderProps = {
    clickedSideBar: boolean;
    setClickedSideBar: React.Dispatch<React.SetStateAction<boolean>>;
};

// Define prop types for DashboardRecords
export type DashboardRecordsProps = {
    records: Record<string, any>[]; // Array of record objects containing user details
    maxItems: number; // Maximum number of items to display in the table
};

// Define prop types for DashboardSideBar component
export type DashboardSideBarProps = {
    clicked: boolean; // Tracks the sidebar state (open/close) in the parent
    setClicked: React.Dispatch<React.SetStateAction<boolean>>; // Function to toggle sidebar state in the parent
};

// Define prop types for UserDetailBottomBox component
export type UserDetailProps = {
    userDetails: Record<string, any>; // Array of user detail records
};

// Define the filter criteria type for filtering records
export type FilterCriteria = {
    organization?: string;
    username?: string;
    email?: string;
    date?: string;
    phoneNumber?: string;
    status?: string;
};