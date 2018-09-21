import ApolloClient from "apollo-boost";

export const client = new ApolloClient({
  uri: "http://192.168.1.34:3002",
  headers: {
    Authorization: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNqbWI0MzN3NzAwNzMwYTIweTU0Ym16aGQiLCJuYW1lIjoiUmFmYWVsIFJpYmVpcm8gQ29ycmVpYSIsImVtYWlsIjoicmFmYWVsQHJhZmFlbC5jb20iLCJzY29wZXMiOlsiYWRtaW4iXSwiaWF0IjoxNTM3NDgwNTg4LCJleHAiOjE1NDAwNzI1ODgsImF1ZCI6InVzZXIiLCJpc3MiOiJlbnZpc2lvbmluZyIsInN1YiI6ImNqbWI0MzN3NzAwNzMwYTIweTU0Ym16aGQifQ.gUGQv7v_-DpQOD-_25mpAVJvu6WwlHwlqbIN1QFjHnbuBiejelk_-lzsMVv4N-RJRIG6gYfkMWrfmx1xeQTfl1CccsxpikhRxKTnjV2G07bZJiYyKolLfMtDEJOGHgxQ0OknPDLP4uIWdfjpCjonTzIAJ-4f9bqk2H5oCikxODqN9Nal4Rwj-tWyTo_xAoiRbmVrmOvUYZHQQ6WA1Y_lZrnJwXrQUgBoiUro3ioMua0oqNSsKLSCyUcfNbEQWMsr4kxUgHum1sCKRw9z3bAtUEp2OBxvREES7YgLzhbJlqLvLXsE68ln0mHjAE0eodzMtJV3iS6CFRZMO_9oWWHXzQ'
  }
});

export const clientPrisma = new ApolloClient({
  uri: 'http://192.168.1.34:4466'
})