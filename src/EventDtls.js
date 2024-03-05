import React from 'react'
import './App.css';
export default function EventDtls() {
  return (
    <>
        <ol className="w3-animate-opacity" style={{marginLeft:'22%',marginTop:'2%'}}>
	<li>Registration Starts <img style={{height:'40px',width:'40px'}} src="data:image/png;base64,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" alt="14feb" /></li>
	<li>Registration Ends <img style={{height:'60px',width:'60px'}} src="https://cdn1.vectorstock.com/i/1000x1000/61/60/icon-day-date-3-march-template-calendar-page-vector-35286160.jpg" alt="3march" /></li>
	<li>Hackathon Starts <img style={{height:'60px',width:'60px'}} src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAMAAzAMBEQACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAAAQIDBAUHBgj/xABKEAABAwICAwwGBggDCQAAAAABAAIDBAUGERIhMQcTFBdBUVVhcYGk0hYyk6Gx0SJDUnKRkhUjM0JiZILhJFNUJkRzdIOUosHw/8QAGwEBAQADAQEBAAAAAAAAAAAAAAECBAUDBgf/xAAwEQEAAQMCAwYFBAMBAAAAAAAAAQIDEQQSITFRBRMUQVKRInGBodEyYfDxBhVCJP/aAAwDAQACEQMRAD8A7igICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgFBiiffKySBrstBoJ70FdLNvwkH70byw//AHYQgvoCAgICAgICDG38urHU7XAFkYce8nL4FBVTzb66RvLG7RKC+gICAgICAgICAgICAgINNTzgYmroD/kRu+KCrDswnZXvH+sePwDQg26AgICAgICAg0kc+WLqiD+Tid/5SIL1jm36SvdzVJb+ACDaoCAgICAgICAgICCiU5RuPMM0HKLriGpudZLJJPKyFry2KKOQtaADtOW0nrXOruTVVl9lpNDbsW4iIzOOMzx/r6MPh5/zpj/1X/NY7mzNqOke0fhRhy9yU+Iq79aSXRtH0jpasutbtj9D5btSmKdTj5LFnvTzPcXB2YdVOIzz5h1ryv1zFTo9k6eK9PmestoL7K3YI+8H5rx7yXS8HRP8j8KxiKZv7sJ/pPzTvJYzoaJ6/wA+isYlnGxlP+Q/NXvZTwFHWT0mqPsU/sz8072U/wBfR1k9Jqj7NP8AkPzTvZP9fR1lBxJN9iD8h+aneyvgKOsqDiGbmi/A/NXvZZeBo/f7fhSb7L/D7/mp3krGjo/mPwwbHfXw4tqn75rNOwDWTllnzrbsTmh852rbijU4jox6O6vlr7i7fZADUEjRkcOQcxXjqJxU6XY9uKrM5jz6Qzf0hJyVFSDzipkBHvXhunq6/c0+mPaPw93ga9T3Wmlhq375LTOA3w7XtI1E5cq3LFyaoxL5ntXSUae5TNuMRV5dHql7uUICAgICAgICCib9i/7pUnktPOHzs+t0ZZQTllI4e8rkzzl+i00/DHyhArQdRdq5TzIy29ObEuDqhuJ680YcYm6DY9EbW6A195z1rqURimMPz/U11V3aqquspss0kVvuAmyDmV7Aw8uTo3F7e4tjP9S1tXEREOx2BVVvrt54Yz9c/wB+zK4bq9YrU5vqJpBXZ7CUNpw7+JQ2nDetDYcO6yhNOAVpOwlU2eYK7PY4nsQ2odXHLUmTaxrmZm4nqnUOboY4YWxlg2sMbTpd7nO9/MunbimKYiHwOtqrrv1VV9Z+y5ZJDFRXXhP0ZG1MZjJ25kHSHuae9eOqxtiXU7Cqq76aP+ZjP1XuHda0n1W10Tcfl343Q8zmD3Lb0vm+b/yDhNv6ukrcfNiAgICAgICAgom/Yv8AulSeSxzfLtbMRWTgH61/xK5PnL9Ft1fBHyhZ34nl7EZ5HOglINTTtmIGQJc5pA5swdi9qL1VPBy9V2XY1Fe/OJnpyGyNY0MgY2Ng1NYzUG9iwruVV823pdNb01G23HvzbyKwV8+GpcQRlrqaOQse3M6Wo5E9id1O3dDCrX2qdTFjHFEdgrpMLS4h02NpI5RGGn1n/SDcx1Zk/gndzs3k6234nw3nK5bMN3K5WCqu8D2CCDP6BJ0pMtuQ6labdU0zVDG92hatX6bVXOfsiw2GW80NXXcPpaKmpXNZJJUOLRm7Zr7clKLc1xnK6jXU2LlNvbNUz0V12F7rSXCho4d7qzWjOmmgfm145TnyZKzbqpmI55Y2u0bVVuqrjTt5xK9c8KVFFQ1VRHcqCqkoxnU08Mub4hz/AIqzamIzlha7St11xTNuYirlM+bBvFkqrVdqa3TyxPlqGRva5mwB5yG1YVUbZw97OspvWqrkRwiZ+zHv1BPZLpNb6mRrpYstJzDqOfalVG2rEs9Nqab9uLlMYa/Sgkc01EDZdH1S5zmlo5gQdi9KL9dEYaeq7L0+prm5+mrz/dDZWMAZFG2OIeqxuwfisK66q54tnSaSzpYmLcc+c9Qzu51g28w6zuHv0obqf42fBbek83zP+QTmqh1Jbj5wQEBAQEBAQEFuf9i/7pSVjm+Va9/+Oqf+K/4lcuY4y+9tV/BT8mPp9aYem400wbk6efKphNzquFq2KiwXZqWuLBSXOqnp5S/YNJv0T3EBbVExFuInzfOaumbmquV0c6Yifbmm81ET8LYlslvlbLSWmChhjcP3376S93aT8Eqj4aqY/ZlYmY1Nq/Xwmqap+mOHszaKS12GqsNnrbpvE0dOWz0m8EiV03O4HIHkWURTTMU5eFybt+m5dinOZ4TnlhqqGjprDh/GVLdKR9RS09XA0xNcYy5peNEh3eD3LCKYpoqiWxXer1F+xVbnE4njzbihnp2XzDUlE5sVnnt8sVCMyd7ldta53Kcxt6is4xuiY5Ya1WarN2KuNe6Jn5fs5vcsNX+mfcpqi2VjYaYufNK9hawjS2gnU7kOrPnWtVbqieTu2tbp6opppqjPk99iu8WykxLaqSsskFXUOp6bRqXvILczq/DatiqaYqiJhxdLau16euqmvFOZ4PHbqB/22uA62/BeN6PjdXsqv/yw8nprzw6W400wbk6aYTc69uEnOnuv32fBbOljhL5ztyc10OrrbcEQEBAQEBAQEFuo/YSfdPwSVjm+Ua9rzXVJ0XZb67k6yubMxmX29qi5sjh5LLYJ3erE49gTgzmmuPJebb61/q00h7lcMJqmOa6yz3M7KKU9yYYTchlOtd/lhjgfTVr4Wa2RucS1nPkM9SsxMvOLlumrdHNXBZsRwQyxU9JXRRzZb6yNxaH5HMZgHXkdmexWIljVXaq4zzVTWPE1TUuqpqOulncc3TSOLnEjYcyc89Sm2Sm9ZojbHCPsuz2nF9QyRk0N0lZKWmUPlc4SZbNIE68stWaYqYxdsRjGOCh1kxQaZlM6kuBgY7SZCXEsa7nDc8getNtTLvbMzNXDMrtXRYvrIW09a261ELdYimmc9oPYTkr8WMcWNFWnoq3UxHsxqq14jmmbPVU9fLMwAMkleXOaBsyJOYyUmJnjLOLlqmnbTCzV2y+VEpmq6ermlO2SVxc495KYllTXRTwpYrrXcG+tSSjuUw9d8rTqSqb60Eg7QozjfPktmOQHIscEzC7bnR2DcGDhBdQ4EfTZt7Fs6fGJfP8AbVNUV07odZWy4ggICAgICAgIKXgOYQdhCDyD8C2F73OdTHMkk/SWOyno9o1N71z7o9A7CP8Ad3fmTZT0PE3/AFz7pGBrGPqH/nKbKeh4m96p90jBFlH1UvtCm2E8Rd9U+6r0MtA2Mm9qVdsJ3131Seh1q/mPbOTbB31z1Sn0OtfPUe2d802wd7c6nohaxy1Pt3fNMQd7c9R6H2s8tR7Z3zTEJ3tfVHofav5j2zvmmF72vqp9DbSdonPbKUxB31z1Sj0Ks52smPbIU2wsX7vrlPoPZDthkPbIVNlKxqL3qn3PQSxHbA4/1FNlPQ8Te9U+56BWD/TOz+8mynovir3rn3bfD9hoLLvooItASEaWZzzyVimI5QwuXa7n65mfm3KrzEBAQEBAQEBBB2IMU7SgIIQEBA2oLFbWU1BSyVVbOyCnjGb5JDotHeg55c92XD9LO6KipqyuDfrY2BjD2FxBKCi37tFjnlDK2graQHbK5rXtHbkSfcg6DbbjR3WjZV22pjqKd4za+N2YQZSCoBBUAgnYgglBcpznmgvICAgICAgICAgg7EGK7aUEICAghA69SD5w3S8YzYovMkNPKf0TTPLKdjT9GUj6w8+fJ1IMHCOCLzivSkoGRQUjHaL6qc5Mz+y0DW4+7rQbTEe5ZiCx0T61hp6+mjGk80xIewcp0TtHYe5B0jcawzNY8POravfGVFwym3k55RMy+jmORx2nuHIg6EAgqAQTsQQSgoJQXaX95BkICAgICAgICAgg7EGK7aUEICCEBB5vdGuT7Rgi71kLi2XeN6jI2hzyGAjrGlmg+ZaandU1ENLC7J80jYmcwLiAPig+l5LrhzAlmpLdV1kNJHBCGxxZ6UjxynRGs69fags2rdIwpc5xDT3QRyuOi0VEbotLsLgg9czIgOGTmkAgjlQVBBOxBBKCglBbc7JBfojpF/UgykBAQEBAQEBAQQdiDEcfpFAQQgICDwm7WXDAFTo8tRAD2aY/95IOA26qfQV0FZE1pfTyNkaHbNIbM0HoqLCeLcZSS3eGifOKhxcamolEYk+5nrI7Bkg0N3tdfZ6x9DdqSSlqGjXG8aiOcHYR1hB1XcPxbUTVL8N3CV0jBEZaN7zmW6PrM69RzHYUHZNnV1IIJQUOKC29wCCxJIACSgvWmdkr5Qw56OWaDZICAgICAgICAgg7EGIfWKCEBAQCUHkN1ijfW7n93bH60LGT9zHhx9wKD52tXB/0nQitaDS8IjEwccgWaQ0s+rJB9bxNY2NjYgN7DQGjLVllqGSDl27/AEsBsdrq3BoqGVRjYcteiWkkdmoHuQc33L3OZug2JzBrM7geze3A+4oPp0oKHuDQSdgQYT6l/V+CqMeWqkyOTkGrq6k/vOzPWg2WD3mRtS87CRkkj0iiiAgICAgICAgg7EGIfWKCEAoIzQEFupgjqaaWnmaHRSsMb2kZ6TSMiPeg+WMU2CfDV6qrTVNP6okxPP1kR9V34aj1goOgYU3YX2y1xUN8t8tU+BoayoieAXNGzSB5etB5PH2NarGNwhfJDwaipxlDTh2eRO1zjsJ7EHotw3D0lZiB19mY4UlA1zIncjpXDROXPotJz7Qg7sSgx6p36koNdLIAqjX1E+vJqDU18p30UrP27tcn8A5u0oPYYWp94pnA7TkkjeKKICAgICAgICCDsQYh9YoIQCghAQVDNBo8WYQtWK6NsNyhIljz3moj1SRZ7cjzdSDl1buI3NkxFDdqSaHk36Mtd35akGZZNxIiYPvt1a6IHXDSNyLhzFx2IOr22gpLVQw0NugZT00IyjjZsHzPWguucgw62UNjAPKUGmqJ9eTRmeZVGqrrhwYmOACWsdyDWI+s/JBl4es7tIzS6T3uOk9zuUlB7eijEbNEKDJRRAQEBAQEBAQQdhQYTXB2vPXzIJKCNqAAgrAQTkgnJBGZ28qCglBbc5BYkeg0lzrBpEaWzUOVVGlkkq6l2hTgsz2yEa+5UbOzWARuDntzcdZJUHqaeFkLA1oUGTTOBc4DXlyoMhFEBAQEBAQEBBBQam4UNXnpUbtp2B2jkgw+BXfnPtVUOBXfnPtUDgV35z7ZA4HePtO9sgcDvH2ne2QOB3j7TvbIHArxzu9sgcCu/OfaoI4BdTtJ9r/dBSbddOUH2v8AdBaNlrSczAzP74TIqbaK9vqwtHY9Mi6KG7N9XMdkv90FTKK7aQDnO0c9f65Bu6WDeGZOObjtKir6AgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDxPGtgrpjw8vlVxIk7q2CxtvHh5fKmJEca2ChlneNuz/AA8vlTEieNbBeeX6Y1/8vL5VMCONfBPTI/7eXyq4DjWwV0x4eXypiQ41sFdMeHl8qYkONbBXTHh5fKmA41sFdMeHl8qYkONbBXTHh5fKmA41sFdMeHl8qYkONbBXTHh5fKmJDjWwV0x4eXypiQ41sFdMeHl8qYkONbBXTHh5fKmA41sFdMeHl8qYkONbBXTHh5fKmJDjWwV0x4eXypiQ41sFdMeHl8qYkONbBXTHh5fKmA41sFdMeHl8qYkONbBfTHh5fKmA41sFdMeHl8qYkONbBXTHh5fKmJDjWwV0x4eXypiQ41sF9MeHl8qYH//Z" alt="6mar" /></li>
	<li>Hackathon Ends <img style={{height:'60px',width:'60px'}} src="data:image/jpeg;base64,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" alt="7mar" /></li>
        </ol> 
        <h1 id="venue" style={{display:'flex',justifyContent:'center'}}>Venue</h1>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.6584482202607!2d77.03538977517955!3d28.610021575677045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05dd375e5a13%3A0x108adaa3abe4bd07!2sNetaji%20Subhas%20University%20of%20Technology!5e0!3m2!1sen!2sin!4v1709581443231!5m2!1sen!2sin" width="100%" height="450" style={{border:0, allowfullscreen:"", loading:"lazy", referrerpolicy:"no-referrer-when-downgrade"}}></iframe>
    </>
  )
}
