import { useState } from "react"
import { Card, Col, ListGroup, Row } from "react-bootstrap"
import Navigation from "../components/Navigation"

let urlPrefix = 'https://webe-api.herokuapp.com/'
let data = [
    {
        title: 'Google login',
        url: urlPrefix+'/api/auth/google/',
        headers: [],
        data:`{<br />&nbsp;&nbsp;&nbsp;"userToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ95j"<br />}`,
        method: 'POST',
        response: `{<br />&nbsp;&nbsp;&nbsp;status: true,
                    <br />&nbsp;&nbsp;&nbsp;message: 'Request successfull',
                    <br />&nbsp;&nbsp;&nbsp;data: {
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;accessToken: token,
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;refreshToken: refresh_token, 
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;id: userId, 
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;firstName: firstName, 
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lastName: lastName, 
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;email: email
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;}
                <br />}`
    },
    {
        title: 'Facebook login',
        url: urlPrefix+'/api/auth/facebook/',
        headers: [],
        data:`{<br />&nbsp;&nbsp;&nbsp;"userToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ95j"\n, <br />&nbsp;&nbsp;&nbsp;"names": "John Doe", <br />&nbsp;&nbsp;&nbsp;"email": "John@gmail.com" , <br />&nbsp;&nbsp;&nbsp;"picture": url, <br />&nbsp;&nbsp;&nbsp;"userID": id<br />}`,
        method: 'POST',
        response: `{<br />&nbsp;&nbsp;&nbsp;status: true,
                    <br />&nbsp;&nbsp;&nbsp;message: 'Request successfull',
                    <br />&nbsp;&nbsp;&nbsp;data: {
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;accessToken: token,
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;refreshToken: refresh_token, 
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;id: userId, 
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;firstName: firstName, 
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lastName: lastName, 
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;email: email
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;}
                <br />}`
    },
    {
        title: 'Apple login',
        url: urlPrefix+'/api/auth/apple/',
        headers: [],
        data: `{
                <br />&nbsp;&nbsp;&nbsp;"identityToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ95j"\n, 
                <br />&nbsp;&nbsp;&nbsp;"user": "user",
                <br />&nbsp;&nbsp;&nbsp;"familyName": "John",
                <br />&nbsp;&nbsp;&nbsp;"givenName": "Doe", 
                <br />&nbsp;&nbsp;&nbsp;"email": "John@gmail.com", 
            <br />}`,
        method: 'POST',
        response: `{<br />&nbsp;&nbsp;&nbsp;status: true,
                <br />&nbsp;&nbsp;&nbsp;message: 'Request successfull',
                <br />&nbsp;&nbsp;&nbsp;data: {
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;accessToken: token,
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;refreshToken: refresh_token, 
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;id: userId, 
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;firstName: firstName, 
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lastName: lastName, 
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;email: email
                <br />&nbsp;&nbsp;&nbsp;&nbsp;}
            <br />}`
    },
    {
        title: 'Normal Signup',
        url: urlPrefix+'/api/auth/register/',
        headers: [],
        data:'{<br />&nbsp;&nbsp;&nbsp;"email": "johndoe@gmail.com", <br />&nbsp;&nbsp;&nbsp;"password": "pass", <br />&nbsp;&nbsp;&nbsp;"firstName": "John", <br />&nbsp;&nbsp;&nbsp;"lastName": "doe"<br>}',
        method: 'POST',
        response: `{<br />&nbsp;&nbsp;&nbsp;status: true,
                        <br />&nbsp;&nbsp;&nbsp;message: 'Request successfull',
                        <br />&nbsp;&nbsp;&nbsp;data: {
                            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;id: "61fbdb5b8da25eeb9ce88c7a"
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;}
                    <br />}`
    },
    {
        title: 'login',
        url: urlPrefix+'/api/auth/login/',
        headers: ["Authorization: Bearer AccessToken"],
        data:'{<br />&nbsp;&nbsp;&nbsp;"email": "johndoe@gmail.com", <br />&nbsp;&nbsp;&nbsp;"password": "pass"<br />}',
        method: 'POST',
        response: `{<br />&nbsp;&nbsp;&nbsp;status: true,
                    <br />&nbsp;&nbsp;&nbsp;message: 'Login successfull',
                    <br />&nbsp;&nbsp;&nbsp;data: {
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;accessToken: token, 
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;refreshToken: refresh_token, 
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;id: userId, 
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;firstName: firstName, 
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lastName: lastName, 
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;email: email
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;}
                <br />}`
    },
    {
        title: 'Reset password',
        url: urlPrefix+'/api/user/reset-password',
        headers: ["Authorization: Bearer AccessToken"],
        data:'{<br />&nbsp;&nbsp;&nbsp;"oldPassword": "samplePass1.", <br />&nbsp;&nbsp;&nbsp;"newPassword": "samplePass2"<br />}',
        method: 'POST',
        response: `{<br />&nbsp;&nbsp;&nbsp;status: true,
                    <br />&nbsp;&nbsp;&nbsp;message: 'Paswword updated successfully",
                    <br />&nbsp;&nbsp;&nbsp;data: "Password updated successfully
                <br />}`
    },
    {
        title: 'Update profile',
        url: urlPrefix+'/api/user/profile/edit/',
        headers: ["Authorization: Bearer AccessToken"],
        data:`{
                <br />&nbsp;&nbsp;&nbsp;"email": "johndoe@webe.com"\n, 
                <br />&nbsp;&nbsp;&nbsp;"firstName": "John", 
                <br />&nbsp;&nbsp;&nbsp;"lastName": "doe" , 
                <br />&nbsp;&nbsp;&nbsp;"address": "Home address", 
                <br />&nbsp;&nbsp;&nbsp;"phone": "+1 (301) 993-3921"
            <br />}`,
        method: 'POST',
        response: `{<br />&nbsp;&nbsp;&nbsp;status: true,
                    <br />&nbsp;&nbsp;&nbsp;message: 'Profile update successfull',
                    <br />&nbsp;&nbsp;&nbsp;data: {
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"email": "johndoe@webe.com"\n, 
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"firstName": "John", 
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"lastName": "doe" , 
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"address": "Home address", 
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"phone": "+1 (301) 993-3921"
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;}
                <br />}`
    },
    {
        title: 'Rank webe elements',
        url: urlPrefix+'/api/webe-elements/rank',
        headers: ["Authorization: Bearer AccessToken"],
        data:`[<br />&nbsp;&nbsp;&nbsp;{"element": "61ea877cfbaaca3", "rank": 2},
                <br />&nbsp;&nbsp;&nbsp;{"element": "61ea877cfbaaca", "rank": 4},
                <br />&nbsp;&nbsp;&nbsp;{"element": "61ea877cfbaaca", "rank": 1},
                <br />&nbsp;&nbsp;&nbsp;{"element": "61ea877cfbaw35", "rank": 6},
                <br />&nbsp;&nbsp;&nbsp;{"element": "61ea877cfba8f5", "rank": 5},
                <br />&nbsp;&nbsp;&nbsp;{"element": "61ea877cfbaa9a", "rank": 3}
            <br />]`,
        method: 'POST',
        response: `{<br />&nbsp;&nbsp;&nbsp;status: true,
                        <br />&nbsp;&nbsp;&nbsp;message: 'Request successfull',
                        <br />&nbsp;&nbsp;&nbsp;data: [
                            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"_id": "61f3e44e94a8ca1870150ea6", "element": "61ea877cfbaaca38e7b76caa", "rank": 2},
                            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"_id": "61f3e44e94a8ca1870150ea1", "element": "61ea877cfbaaca38e7b76cab", "rank": 4},
                            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"_id": "61f3e44e94a8ca1870150ea2", "element": "61ea877cfbaaca38e7b76cac", "rank": 1},
                            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"_id": "61f3e44e94a8ca1870150ea3", "element": "61ea877cfbaaca38e7b76cad", "rank": 6},
                            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"_id": "61f3e44e94a8ca1870150ea4", "element": "61ea877cfbaaca38e7b76cae", "rank": 5},
                            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"_id": "61f3e44e94a8ca1870150ea5", "element": "61ea877cfbaaca38e7b76caf", "rank": 3}
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;]
                    <br />}`,
    },
    {
        title: 'View element rankings',
        url: urlPrefix+'/api/webe-elements/rank/view',
        headers: ["Authorization: Bearer AccessToken"],
        data:'',
        method: 'GET',
        response: `{<br />&nbsp;&nbsp;&nbsp;status: true,
            <br />&nbsp;&nbsp;&nbsp;message: 'Request successfull',
            <br />&nbsp;&nbsp;&nbsp;data: [
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"_id": "61f9d20075ab8c9eef803409",
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name": "Activity",
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"created_at": "2022-02-02T00:36:16.672Z",
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"__v": 0,
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": "61f9d20075ab8c9eef803409"
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"_id": "61f9d1e975ab8c9eef803407",
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name": "Emotional Experience",
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"created_at": "2022-02-02T00:35:53.563Z",
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"__v": 0,
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": "61f9d1e975ab8c9eef803407"
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"_id": "61f9d1ba75ab8c9eef803405",
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name": "Physical Health",
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"created_at": "2022-02-02T00:35:06.320Z",
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"__v": 0,
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": "61f9d1ba75ab8c9eef803405"
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"_id": "61f9d18b75ab8c9eef803403",
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name": "Sleep",
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"created_at": "2022-02-02T00:34:19.027Z",
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"__v": 0,
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": "61f9d18b75ab8c9eef803403"
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"_id": "61f9d17875ab8c9eef803401",
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name": "Relationships",
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"created_at": "2022-02-02T00:34:00.280Z",
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"__v": 0,
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": "61f9d17875ab8c9eef803401"
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"_id": "61f9d16d75ab8c9eef8033ff",
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name": "Spirituality",
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"created_at": "2022-02-02T00:33:49.447Z",
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"__v": 0,
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": "61f9d16d75ab8c9eef8033ff"
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
            <br />&nbsp;&nbsp;&nbsp;&nbsp;]
            <br />}`
    },
    {
        title: 'Webe daily entry',
        url: urlPrefix+'/api/webe-elements/save',
        headers: ["Authorization: Bearer AccessToken"],
        data: `{
            <br />&nbsp;&nbsp;&nbsp;"element": "61f9d1ba75ab8c9eef803405",
            <br />&nbsp;&nbsp;&nbsp;"value": 5
        <br />}`,
        method: 'POST',
        response: `{<br />&nbsp;&nbsp;&nbsp;status: true,
            <br />&nbsp;&nbsp;&nbsp;message: 'Request successfull',
            <br />&nbsp;&nbsp;&nbsp;data: {
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"_id": "61fa5ebfb5289558353ffd0c",
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"element": "61f9d1ba75ab8c9eef803405",
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"user": "61ea877cfbaaca38e7b76caa",
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"__v": 0,
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"created_at": "2022-02-02T10:36:47.920Z",
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"value": 5,
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": "61fa5ebfb5289558353ffd0c"
            <br />&nbsp;&nbsp;&nbsp;&nbsp;}
        <br />}`
    },
    {
        title: 'View history',
        url: urlPrefix+'/api/webe-elements/:user/daily-entries/:start/:end/',
        headers: ["Authorization: Bearer AccessToken"],
        data:'',
        method: 'GET',
        response: `{<br />&nbsp;&nbsp;&nbsp;status: true,
            <br />&nbsp;&nbsp;&nbsp;message: 'Request successfull',
            <br />&nbsp;&nbsp;&nbsp;data: {
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Spirituality": [
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"_id": "61fbace1b528955835402b2c",
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"element": "61f9d16d75ab8c9eef8033ff",
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"user": "61ea877cfbaaca38e7b76caa",
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"__v": 0,
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"created_at": "2022-02-03T10:22:25.109Z",
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"value": 5,
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": "61fbace1b528955835402b2c"
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;],
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Relationships": [
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"_id": "61fbad03b528955835402b35",
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"element": "61f9d17875ab8c9eef803401",
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"user": "61ea877cfbaaca38e7b76caa",
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"__v": 0,
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"created_at": "2022-02-03T10:22:59.453Z",
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"value": 5,
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": "61fbad03b528955835402b35"
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;],
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Sleep": [
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"_id": "61fbad15b528955835402b3b",
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"element": "61f9d18b75ab8c9eef803403",
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"user": "61ea877cfbaaca38e7b76caa",
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"__v": 0,
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"created_at": "2022-02-03T10:23:17.995Z",
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"value": 5,
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": "61fbad15b528955835402b3b"
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;],
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Physical Health": [
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"_id": "61fbad25b528955835402b40",
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"element": "61f9d1ba75ab8c9eef803405",
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"user": "61ea877cfbaaca38e7b76caa",
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"__v": 0,
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"created_at": "2022-02-03T10:23:33.665Z",
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"value": 5,
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": "61fbad25b528955835402b40"
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;],
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Emotional Experience": [
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"_id": "61fbad36b528955835402b45",
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"element": "61f9d1e975ab8c9eef803407",
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"user": "61ea877cfbaaca38e7b76caa",
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"__v": 0,
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"created_at": "2022-02-03T10:23:50.206Z",
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"value": 5,
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": "61fbad36b528955835402b45"
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;],
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Activity": [
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"_id": "61fbad46b528955835402b4a",
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"element": "61f9d20075ab8c9eef803409",
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"user": "61ea877cfbaaca38e7b76caa",
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"__v": 0,
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"created_at": "2022-02-03T10:24:06.516Z",
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"value": 5,
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": "61fbad46b528955835402b4a"
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]
            <br />}
        }`
    },
    {
        title: 'View Resource categories',
        url: urlPrefix+'/api/resources/categories/',
        headers: ["Authorization: Bearer AccessToken"],
        data:'',
        method: 'GET',
        response: `{<br />&nbsp;&nbsp;&nbsp;status: true,
            <br />&nbsp;&nbsp;&nbsp;message: 'Request successfull',
            <br />&nbsp;&nbsp;&nbsp;data: [
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"_id": "61f8ff40674ff932e81c52d7",
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name": "Webe Wisdom",
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"created_at": "2022-02-02T10:43:34.154Z",
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": "61f8ff40674ff932e81c52d7"
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
            <br />&nbsp;&nbsp;&nbsp;&nbsp;]
        <br />}`
    },
    {
        title: 'View resource by category',
        url: urlPrefix+'/api/resources/categories/:id',
        headers: ["Authorization: Bearer AccessToken"],
        data:'',
        method: 'GET',
        response: `{<br />&nbsp;&nbsp;&nbsp;status: true,
            <br />&nbsp;&nbsp;&nbsp;message: 'Request successfull',
            <br />&nbsp;&nbsp;&nbsp;data: [
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"_id": "61f904ab674ff932e81c52d8",
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"category": "61f8ff40674ff932e81c52d7",
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "Wisdon Resource",
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"author": "61ea8fcc0ff0410b2e5f5f56",
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"created_at": "2022-02-02T10:44:55.555Z",
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": "61f904ab674ff932e81c52d8"
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"_id": "61f9c5b6bedea4d095545f7b",
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "This is a resource",
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"author": "61ea8fcc0ff0410b2e5f5f56",
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"category": "61f8ff40674ff932e81c52d7",
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"created_at": "2022-02-01T23:43:50.909Z",
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"__v": 0,
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": "61f9c5b6bedea4d095545f7b"
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"_id": "61f9c5d8ce105e407cd4022b",
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "This is a resource",
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"author": "61ea8fcc0ff0410b2e5f5f56",
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"category": "61f8ff40674ff932e81c52d7",
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"created_at": "2022-02-01T23:44:24.366Z",
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"__v": 0,
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": "61f9c5d8ce105e407cd4022b"
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"_id": "61f9c6b2797e4cc39e8a199e",
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "This is another resource",
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"author": "61ea8fcc0ff0410b2e5f5f56",
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"category": "61f8ff40674ff932e81c52d7",
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"created_at": "2022-02-01T23:48:02.602Z",
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"__v": 0,
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": "61f9c6b2797e4cc39e8a199e"
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
            <br />&nbsp;&nbsp;&nbsp;&nbsp;]
        <br />}`
    },
    {
        title: 'View resource by id',
        url: urlPrefix+'/api/resources/:id/',
        headers: ["Authorization: Bearer AccessToken"],
        data:'',
        method: 'GET',
        response: `{<br />&nbsp;&nbsp;&nbsp;status: true,
            <br />&nbsp;&nbsp;&nbsp;message: 'Request successfull",
            <br />&nbsp;&nbsp;&nbsp;data: {
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"_id": "61f904ab674ff932e81c52d8",
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"category": {
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"_id": "61f8ff40674ff932e81c52d7",
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name": "Webe Wisdom",
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"created_at": "2022-02-02T10:48:17.705Z",
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": "61f8ff40674ff932e81c52d7"
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "Wisdon Resource",
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"author": {
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"_id": "61ea8fcc0ff0410b2e5f5f56",
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"firstName": "Alex",
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"lastName": "Volk",
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"email": "volk@gmail.com",
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"password": "Dh0WNfNXum8CGvKxTQQbKQ==$eg58cx25pCfkLblriHZo9VdYTs8gbQXrOpAA5kxZVqaVUVgnC7OwFJeYPl/+XoITyFA/oRfrpnp7qf53Dt/Y7w==",
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"type": "user",
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"__v": 0,
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": "61ea8fcc0ff0410b2e5f5f56"
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"created_at": "2022-02-02T10:48:17.693Z",
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": "61f904ab674ff932e81c52d8",
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"content": [
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"_id": "61f90699674ff932e81c52d9",
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"type": "h1",
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"text": "Reource heading",
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"order": 1,
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"resource": "61f904ab674ff932e81c52d8",
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"created_at": "2022-02-02T10:48:17.709Z",
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": "61f90699674ff932e81c52d9"
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]
            <br />&nbsp;&nbsp;&nbsp;&nbsp;}
        <br />}`
    },
    {
        title: 'Gallery Images',
        url: urlPrefix+'/api/gallery/images/',
        headers: ["Authorization: Bearer AccessToken"],
        data:'',
        method: 'GET',
        response: `{<br />&nbsp;&nbsp;&nbsp;status: true,
            <br />&nbsp;&nbsp;&nbsp;message: 'Login successfull,
            <br />&nbsp;&nbsp;&nbsp;data: [
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"_id": "61f1136956b7913f4461af53",
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"\"caption\"": "First Image",
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"\"url\"": "localhost:3001/gallery/images/pexels-alex-azabache-3214944.jpg",
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"created_at": "2022-02-02T10:50:47.561Z",
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": "61f1136956b7913f4461af53"
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"_id": "61f11887c047fb3f440efd36",
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"caption": "Second image",
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "localhost:3001/gallery/images/pexels-brady-knoll-3329292.jpg",
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"created_at": "2022-02-02T10:50:47.561Z",
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": "61f11887c047fb3f440efd36"
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"_id": "61f11899c047fb3f440efd37",
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"caption": "Third Image",
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "localhost:3001/gallery/images/pexels-jacob-colvin-1761279.jpg",
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"created_at": "2022-02-02T10:50:47.561Z",
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": "61f11899c047fb3f440efd37"
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"_id": "61f118adc047fb3f440efd38",
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"caption": "Fourth Image",
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "localhost:3001/gallery/images/pexels-jeremy-bishop-3464632.jpg",
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"created_at": "2022-02-02T10:50:47.561Z",
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": "61f118adc047fb3f440efd38"
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"_id": "61f118b8c047fb3f440efd39",
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"caption": "Fifth Image",
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "localhost:3001/gallery/images/pexels-luis-del-río-15286.jpg",
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"created_at": "2022-02-02T10:50:47.561Z",
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": "61f118b8c047fb3f440efd39"
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
            <br />&nbsp;&nbsp;&nbsp;&nbsp;]
        <br />`
    },
    {
        title: 'View single image',
        url: urlPrefix+'/api/gallery/images/:id/',
        headers: ["Authorization: Bearer AccessToken"],
        data:'',
        method: 'GET',
        response: `{<br />&nbsp;&nbsp;&nbsp;status: true,
            <br />&nbsp;&nbsp;&nbsp;message: 'Login successfull,
            <br />&nbsp;&nbsp;&nbsp;data: {
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"caption": "Fifth Image",
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "localhost:3001/gallery/images/pexels-luis-del-río-15286.jpg",
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"created_at": "2022-02-02T10:58:14.991Z",
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": "61f118b8c047fb3f440efd39"
            <br />&nbsp;&nbsp;&nbsp;&nbsp;}
        <br />}`
    },
    {
        title: 'Save image',
        url: urlPrefix+'/api/gallery/image/save',
        headers: ["Authorization: Bearer AccessToken"],
        data:`{
            "image": "61f118b8c047fb3f440efd39"
        }`,
        method: 'POST',
        response: `{<br />&nbsp;&nbsp;&nbsp;status: true,
            <br />&nbsp;&nbsp;&nbsp;message: 'Login successfull,
            <br />&nbsp;&nbsp;&nbsp;data: {
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"_id": "61f3bf08b5289558353f948a",
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"img": "61f118b8c047fb3f440efd39",
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"user": "61ea877cfbaaca38e7b76caa",
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"__v": 0,
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"created_at": "2022-01-28T10:01:44.825Z",
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"updated_at": "2022-02-02T11:00:25.046Z",
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": "61f3bf08b5289558353f948a"
            <br />&nbsp;&nbsp;&nbsp;&nbsp;}
        <br />}`
    },
    {
        title: 'View Saved images',
        url: urlPrefix+'/api/gallery/images/user/saved-images/',
        headers: ["Authorization: Bearer AccessToken"],
        data:'',
        method: 'GET',
        response: `{<br />&nbsp;&nbsp;&nbsp;status: true,
            <br />&nbsp;&nbsp;&nbsp;message: 'Login successfull,
            <br />&nbsp;&nbsp;&nbsp;data: [
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"_id": "61f3c040b5289558353f9578",
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"img": "61f1136956b7913f4461af53",
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"user": "61ea877cfbaaca38e7b76caa",
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"__v": 0,
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"created_at": "2022-01-28T10:06:56.842Z",
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"updated_at": "2022-01-28T10:06:56.842Z",
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": "61f3c040b5289558353f9578"
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"_id": "61f126f91c3274bd11ed5b93",
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"img": "61f118adc047fb3f440efd38",
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"__v": 0,
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"created_at": "2022-01-26T10:48:25.682Z",
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"user": "61ea877cfbaaca38e7b76caa",
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"updated_at": "2022-01-28T10:06:56.842Z",
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": "61f126f91c3274bd11ed5b93"
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"_id": "61f3bf08b5289558353f948a",
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"img": "61f118b8c047fb3f440efd39",
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"user": "61ea877cfbaaca38e7b76caa",
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"__v": 0,
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"created_at": "2022-01-28T10:01:44.825Z",
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"updated_at": "2022-02-02T11:01:37.171Z",
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": "61f3bf08b5289558353f948a"
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
            <br />&nbsp;&nbsp;&nbsp;&nbsp;]
        <br />}`
    },
]

const ApiDocumentation = (props)=>{
    const [endPoints, setEndPoints] = useState(data)
    const [current, setCurrent] = useState(endPoints[0])

    const display = (e)=>{
        console.log(e.target.dataset.endpoint)
        setCurrent(data[e.target.dataset.endpoint])
    }
    let i = 0
    return (
        <>
            <Col xs="12" className="p-0">
                <Navigation getUser={props.getUser} />
                <h2 className="text-center mb-2">API documentation</h2>
            </Col>
            <Col xs="12">
                <Row>
                    <Col md="2" className="vh-100 overflow-auto">
                        <h3>Endpoints</h3>
                        <ListGroup>
                            {
                                endPoints.map(endPoint=>{
                                    return <ListGroup.Item key={i} data-endpoint={(i++)} onClick={display}>{endPoint.title}</ListGroup.Item>
                                })
                            }
                            
                        </ListGroup>
                    </Col>
                    <Col md="5" className="pt-5">
                        <Card className="bg-secondary">
                            <Card.Body className="text-white">
                                <ol>
                                    <li>{current.url}</li>
                                    {
                                        current.headers.map(header=>{
                                            return <li>-H {header}</li>
                                        })
                                    }
                                    <li dangerouslySetInnerHTML={{__html: "-d "+current.data}} />
                                    <li>-X {current.method}</li>
                                </ol>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md="5">
                        <h3>Response</h3>
                        <Card className="bg-secondary">
                            <Card.Body className="text-white" dangerouslySetInnerHTML={{__html: current.response}}>
                                
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Col>
            <Col xs="12" className="bg-dark text-white">
                <h3 className="text-center py-4 ">Footer</h3>
            </Col>

        </>
    )
}

export default ApiDocumentation