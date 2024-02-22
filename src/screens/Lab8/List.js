import { Modal, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { style } from './Style'
import React, { useEffect, useState } from "react";

const ListUser = ({ navigation }) => {
    const [data, setdata] = useState([]);
    const [openDialog, setopenDialog] = useState(false);
    const [selecttedUser, setselecttedUser] = useState(undefined);
    const getAPI = async () => {
        const url = 'https://65d40200522627d50109be7c.mockapi.io/users';
        let result = await fetch(url);
        result = await result.json();
        if (result) {
            setdata(result);
        }
    };

    const handleDelete = async id => {
        const url = 'https://65d40200522627d50109be7c.mockapi.io/users';
        let result = await fetch(`${url}/${id}`, {
            method: 'Delete',
        });
        result = await result.json();
        if (result) {
            getAPI();
        }
    };
        const handlUpdate = data => {
            //phan nay se code sau
            setopenDialog(true);
            setselecttedUser(data); 
            console.log("Update");
        };
        React.useEffect(() => {
            const focusHandler = navigation.addListener('focus', () => {
                getAPI();

            });
            return focusHandler;
        }, [navigation]);
        return (
            <ScrollView>
                <TouchableOpacity style ={style.buttonNew}
                    onPress={() => navigation.navigate('AddUser')}>
                    <Text styles={style.buttonNew}> addnew</Text>

                </TouchableOpacity>
                {
                    data.length ? data.map((item, index) => (
                        <View style={style.container} key={index}>
                            <View style={style.containerText}>
                                <Text style={style.name} >{item.name}</Text>
                                <Text style={style.birthday}>{item.birthday}</Text>
                            </View>
                            <View style={style.containerButton}>
                                <TouchableOpacity style={style.button}>
                                    <Text style={style.buttonText}
                                        onPress={() => handlUpdate(item)}>
                                        Update
                                    </Text>

                                </TouchableOpacity>
                                <TouchableOpacity style={style.button}>
                                    <Text style={style.buttonText}
                                        onPress={() => handleDelete(item.id)}>
                                        Delete
                                    </Text>

                                </TouchableOpacity>
                            </View>
                        </View>

                    )) : null
                    }
            <Modal visible={openDialog} transparent={true}>
                <UpdateModal setopenDialog={setopenDialog}
                selecttedUser={selecttedUser}
                getAPI={getAPI}>
                     
                </UpdateModal>

            </Modal>

            </ScrollView>
        );
    };
    const UpdateModal=props=>{
        const[name,setName] = useState(undefined);
        const[birthday, setBirthday] = useState(undefined);
        useEffect=(()=>{
            if(props.selecttedUser){
                setName(props.selecttedUser.name);
                setBirthday(props.selecttedUser.birthday);
            }
        },[props.selecttedUser]);
    const updateUser = async() =>{
        const url = 'https://65d40200522627d50109be7c.mockapi.io/users';
        const id = props.selecttedUser.id;
        let result = await fetch(`${url}/${id}`,{
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({name,birthday}),
        
        });
        result = await result.json();
        if(result){
            props.getAPIData();
            props.setopenDialog(fale);

        };
    };
    return(
        <View style={style.modelContent}>
            <TextInput style={style.input} placeholder="Enter name" value={name}
            onChangeText={text =>setName(text)}>

            </TextInput>

            <TextInput style={style.input} placeholder="Enter birthday" value={birthday}
            onChangeText={text => setBirthday(text)}>

            </TextInput>
            <View style={style.buttonGroup}>
                <TouchableOpacity style={style.button} onPress={updateUser}>
                    <Text style={style.buttonText}>Update</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.button}>
                    <Text style={style.buttonText} onPress={()=>props.setopenDialog(false)}>Close</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
     
    };
    export default ListUser;