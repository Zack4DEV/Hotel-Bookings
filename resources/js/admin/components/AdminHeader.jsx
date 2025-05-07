import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Appbar, Avatar, Menu } from 'react-native-paper';

const AdminHeader = () => {
  const [menuVisible, setMenuVisible] = React.useState(false);

  return (
    <Appbar.Header style={styles.header}>
      <Appbar.Content title="Hotel Admin Dashboard" subtitle="Welcome back, Admin" />
      <Menu
        visible={menuVisible}
        onDismiss={() => setMenuVisible(false)}
        anchor={
          <Appbar.Action
            icon={() => <Avatar.Text size={32} label="A" />}
            onPress={() => setMenuVisible(true)}
          />
        }
      >
        <Menu.Item onPress={() => {}} title="Profile" />
        <Menu.Item onPress={() => {}} title="Settings" />
        <Menu.Item onPress={() => {}} title="Logout" />
      </Menu>
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  header: {
    elevation: 4,
    backgroundColor: '#fff',
  },
});

export default AdminHeader;