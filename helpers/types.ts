export type routeType = {
   link: string;
   name: string;
};
interface DestinationType {
   name: string;
   time: string;
}
export type itemsTabType = {
   id: string;
   title: string;
   content: string;
   destination?: DestinationType[];
};

export interface reviewType {
   id: string;
   name: string;
   content: string;
   created_at: string;
}
