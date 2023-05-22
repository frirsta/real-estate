import React from "react";
import { useForm } from "react-hook-form";
import { object, string, number, date } from "yup";
import Button from "@mui/joy/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from '../styles/Form.module.css';
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import Input from '@mui/joy/Input';
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";

const ContactForm = ({ price }) => {
  let userSchema = object({
    name: string().required(),
    message: string().required(),
    number: number().required().positive().integer(),
    email: string().email().required(),
    date: date().default(() => new Date()),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
  });

  const onSubmit = (data) => console.log(data);
  return (
    <div className={styles.FormContainer}>
      <div className={styles.PriceContainer}>
        <span>Price</span>
        <h4>
          <AttachMoneyOutlinedIcon className={styles.PriceIcon} /> {price}
        </h4>
      </div>
      <div className={styles.HorizontalLine}></div>
      <h3 className={styles.RequestHomeTour}>Request a home tour</h3>
      <form className={styles.Form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.InputContainer}>
          <DriveFileRenameOutlineOutlinedIcon className={styles.FormIcon} />
          <Input
            placeholder="Enter your full name"
            className={styles.FormInput}
            
            {...register("name")}
          />
          {errors.name && <span>This field is required</span>}
        </div>
        <div className={styles.InputContainer}>
          <EmailOutlinedIcon className={styles.FormIcon} />
          <Input
            placeholder="Email address"
            className={styles.FormInput}
            
            {...register("email")}
          />
          {errors.email && <span>Not valid email address</span>}
        </div>

        <div className={styles.InputContainer}>
          <LocalPhoneOutlinedIcon className={styles.FormIcon} />
          <Input
            placeholder="Phone number"
            className={styles.FormInput}
            
            {...register("number")}
          />
          {errors.number && <span>Not valid phone number</span>}
        </div>
        <div className={styles.InputContainer}>
          <CalendarMonthOutlinedIcon className={styles.FormIcon} />
          <Input
            type="date"
            placeholder="date"
            className={styles.FormInput}
            
            {...register("date")}
          />
          {errors.date && <span>Not valid date</span>}
        </div>

        <Button className={styles.FormButton} type="submit" variant="soft">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
