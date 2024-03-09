import {makeStyles} from '@rneui/themed';

export const useTextInputStyles = makeStyles(theme => ({
  input: {
    height: 50,
    borderRadius: 15,
    borderWidth: 0,
    backgroundColor: theme.colors.grey0,
    color: theme.colors.black,
    fontSize: 24,
    letterSpacing: 0,
    paddingHorizontal: theme.spacing.md,
  },
  label: {
    color: theme.colors.grey1,
    marginLeft: 15,
    marginBottom: 15,
  },
}));

export const useCheckInputStyles = makeStyles(theme => ({
  container: {
    marginStart: 5,
    marginEnd: 0,
    paddingEnd: 0,
    marginBottom: 0,
    paddingTop: 0,
    width: 'auto',
  },
  input: {
    height: 15,
    borderRadius: 15,
    borderWidth: 0,
    color: 'green',
    fontSize: 10,
    letterSpacing: 15,
    paddingStart: 15,
    paddingEnd: 15,
  },
  label: {
    color: theme.colors.grey1,
    fontSize: 10,
    fontWeight: '400',
    marginLeft: 5,
    marginTop: 7,
    marginBottom: 0,
  },
  labelSecondary: {
    color: theme.colors.black,
    fontSize: 10,
    fontWeight: '400',
    marginLeft: 6,
    paddingRight: 80,
  },
}));