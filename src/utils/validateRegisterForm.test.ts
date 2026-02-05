import {describe, it, expect} from "vitest";
import {validateRegisterForm} from "./validateRegisterForm.ts";

describe("validateRegisterForm", ()=>{
   it("returns error if email is empty", ()=>{
       const errors = validateRegisterForm({
           email: "",
           password: "12345",
           confirmPassword: "12345",
       });
       expect(errors.email).toBeDefined();
   });

   it("returns error if passwords do not match", ()=>{
       const errors = validateRegisterForm({
           email: "test@mail.com",
           password: "12345",
           confirmPassword: "54321",
       });

       expect(errors.confirmPassword).toBeDefined();
   });

    it("returns error if password is less than 6 characters", ()=>{
        const errors = validateRegisterForm({
            email: "test@mail.com",
            password: "123",
            confirmPassword: "123",
        });
        expect(errors.password).toBeDefined();
    });
});