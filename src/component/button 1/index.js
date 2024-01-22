import { Alert, Button } from "react-native"

const button1 = () =>{
    return(
        <Button title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}/>
        );
};
export default React.memo(button1);