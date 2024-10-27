const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.json());

let data = {
  1: `<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebForm2.aspx.cs" Inherits="ExceptionHandlingPractical.WebForm2" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <asp:Label ID="Label1" runat="server" Text="Label"></asp:Label>
            <asp:Button ID="Button1" runat="server" Text="Button" OnClick="Button1_Click" />
        </div>
    </form>
</body>
</html>


using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace ExceptionHandlingPractical
{
    public class CustomException :Exception {
    
    public CustomException(string message): base(message) { 
        
        }

    }
    public partial class WebForm2 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
        }
        protected void Button1_Click(object sender, EventArgs e)
        {
            try
            {
                int a, b, c;
                a = 2;
                b = 0;
                if (b == 0)
                {
                    throw new CustomException("This custom Error");
                }
                Label1.Text = a / b + "";
                
            }
            catch (CustomException ex)
            {
                Label1.Text = ex.Message;
            }
            catch (Exception ex) { 
                Label1.Text = ex.Message;
            }
        }
    }
}`,
  2: `//webfrom.aspx
<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebForm1.aspx.cs" Inherits="DBpracticals.WebForm1" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <table style="width: 100%;">
                <tr>
                    <td>Roll no</td>
                    <td>
                        <asp:TextBox ID="TextBox1" runat="server"></asp:TextBox>
                    </td>
                    <td>&nbsp;</td>
                </tr>
                <tr>
                    <td>Name</td>
                    <td>
                        <asp:TextBox ID="TextBox2" runat="server"></asp:TextBox>
                    </td>
                    <td>&nbsp;</td>
                </tr>
                <tr>
                    <td>class</td>
                    <td>
                        <asp:TextBox ID="TextBox3" runat="server"></asp:TextBox>
                    </td>
                    <td>&nbsp;</td>
                </tr>
                <tr>
                    <td>phone</td>
                    <td>
                        <asp:TextBox ID="TextBox4" runat="server"></asp:TextBox>
                    </td>
                    <td>&nbsp;</td>
                </tr>
                <tr>
                    <td>email</td>
                    <td>
                        <asp:TextBox ID="TextBox5" runat="server"></asp:TextBox>
                    </td>
                    <td>&nbsp;</td>
                </tr>
            </table>

        </div>

        <asp:Button ID="Button1" runat="server" OnClick="Button1_Click" Text="Add Data" />
        <br />
        <asp:Button ID="Button2" runat="server" OnClick="Button2_Click" Text="Show data" />

    </form>
</body>
</html>


//webform.aspx.cs

using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data.SqlClient;

namespace DBpracticals
{
    public partial class WebForm1 : System.Web.UI.Page
    {
        SqlConnection conn = new SqlConnection(@"Data Source=\SQLEXPRESS;Initial Catalog=student;Integrated Security=True;Encrypt=True;TrustServerCertificate=True;");
        protected void Page_Load(object sender, EventArgs e){ }
        protected void Button1_Click(object sender, EventArgs e)
        {
            try
            {
                //SqlConnection conn = new SqlConnection(@"Data Source=\SQLEXPRESS;Initial Catalog=student;Integrated Security=True;Encrypt=True;TrustServerCertificate=True;");
                SqlCommand cmd = new SqlCommand("insert into student values(@std_rollno, @std_name, @std_class, @std_phone, @std_email)", conn);
                cmd.Parameters.AddWithValue("@std_rollno", int.Parse(TextBox1.Text));
                cmd.Parameters.AddWithValue("@std_name", TextBox2.Text);
                cmd.Parameters.AddWithValue("@std_class", TextBox3.Text);
                cmd.Parameters.AddWithValue("@std_phone", int.Parse( TextBox4.Text));
                cmd.Parameters.AddWithValue("@std_email", TextBox5.Text);
                conn.Open();
                cmd.ExecuteNonQuery();
                Response.Write("Inserted successfully");
                conn.Close();
            }
            catch(Exception ex){ 
                Response.Write(ex.Message);
            }
        }

        protected void Button2_Click(object sender, EventArgs e)
        { 
            try
            {
                SqlCommand cmd = new SqlCommand("select * from student", conn);
                conn.Open();
                SqlDataReader dr = cmd.ExecuteReader();
                string optop = "<Table>";
                if (dr.HasRows)
                {
                    while (dr.Read())
                    {
                        optop += "<tr><td>" + dr[0] + "</td><td>" + dr[1] + "</td><td>" + dr[2] + "</td><td>" + dr[3] + "</td><td>" + dr[4] + "</td><tr>";
                    }
                }
                optop += "</table>";
                conn.Close();
                Response.Write(optop);
            }
            catch (Exception ex)
            {
                Response.Write(ex.Message);
            }
        }
    }
}`,
  3: `//webusercontrol.ascx
<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="WebUserControl1.ascx.cs" Inherits="Practical4.WebUserControl1" %>
<div>
    <h3>&copy Copyright</h3>
</div>


//webform.aspx
<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebForm3.aspx.cs" Inherits="Practical4.WebForm3" %>

<%@ Register Src="~/WebUserControl1.ascx" TagPrefix="uc1" TagName="WebUserControl1" %>


<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div>

            <uc1:WebUserControl1 runat="server" ID="WebUserControl1" />
            
        </div>
    </form>
</body>
</html>
`,
  4: `<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebForm2.aspx.cs" Inherits="Practical4.WebForm2" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <asp:AdRotator ID="AdRotator1" runat="server" AdvertisementFile="~/XMLFile1.xml" />
            
        </div>
    </form>
</body>
</html>


//XMLFile1.xml
<?xml version="1.0" encoding="utf-8" ?>
<Advertisements>
	<Ad>
		<ImageUrl>~/Images/ads1.jpg</ImageUrl>
		<NavigateUrl>http://www.example.com/product1</NavigateUrl>
		<AlternateText>Product 1</AlternateText>
		<Keyword>Product</Keyword>
		<Impressions>30</Impressions>
	</Ad>
	<Ad>
		<ImageUrl>~/Images/ads2.jpg</ImageUrl>
		<NavigateUrl>http://www.example.com/product2</NavigateUrl>
		<AlternateText>Product 2</AlternateText>
		<Keyword>Product</Keyword>
		<Impressions>90</Impressions>
	</Ad>
</Advertisements>`,
  5: `using System;

namespace Practical2
{
    internal class Program
    {
        //Practical 2 A 
        static void Main(string[] args)
        {
            int valueType = 123;
            object boxedValue = valueType;//Boxing
            Console.WriteLine($"Original value : {valueType}");
            Console.WriteLine($"Boxed Value : {boxedValue}");

            int unBoxedValue = (int)boxedValue;
            Console.WriteLine($"Unboxed value : {unBoxedValue}");

            valueType = 111;
            Console.WriteLine($"value of original after modifying : {valueType}");
            Console.WriteLine($"Boxed Value : {boxedValue}");        
        }
    }
}`,
  6: `//webform.aspx
<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebForm1.aspx.cs" Inherits="practicalnew6.WebForm1" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <asp:RadioButton ID="RadioButton1" runat="server" GroupName="font" OnCheckedChanged="FontfaceChange" Font-Names="Britannic Bold" Text="Britannic Bold" AutoPostBack="True" />
            <asp:RadioButton ID="RadioButton2" runat="server" GroupName="font" OnCheckedChanged="FontfaceChange" Font-Names="Algerian" Text="Algerian" AutoPostBack="True" />
            <asp:RadioButton ID="RadioButton3" runat="server" GroupName="font" OnCheckedChanged="FontfaceChange" Font-Names="Brush Script MT" Text="Brush Script MT" AutoPostBack="True" />
            <br />
            <br />
            <asp:RadioButton ID="RadioButton4" runat="server" GroupName="fontsize" OnCheckedChanged="FontsizeChange" Text="10" AutoPostBack="True" />
            <asp:RadioButton ID="RadioButton5" runat="server" GroupName="fontsize" OnCheckedChanged="FontsizeChange" Text="20" AutoPostBack="True" />
            <asp:RadioButton ID="RadioButton6" runat="server" GroupName="fontsize" OnCheckedChanged="FontsizeChange" Text="30" AutoPostBack="True" />
            <br />
        <asp:Label ID="Label1" runat="server" Text="Hello world"></asp:Label>
        </div>
        <br />
        <asp:DropDownList ID="DropDownList1" runat="server" AutoPostBack="True" OnSelectedIndexChanged="DropDownList1_SelectedIndexChanged">
            <asp:ListItem Value="91">india</asp:ListItem>
            <asp:ListItem Value="101">america</asp:ListItem>
            <asp:ListItem Value="88">london</asp:ListItem>
        </asp:DropDownList>
        <br />
        <br />
        <asp:TextBox ID="TextBox1" runat="server"></asp:TextBox>
    </form>
</body>
</html>

//webform.aspx.cs
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace practicalnew6
{
    public partial class WebForm1 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }
        protected void FontfaceChange(object sender, EventArgs e)
        {
            Label1.Font.Name = ((RadioButton)sender).Text;
        }

        protected void FontsizeChange(object sender, EventArgs e)
        {
            Label1.Font.Size = Convert.ToInt32(((RadioButton)sender).Text);
        }

        protected void DropDownList1_SelectedIndexChanged(object sender, EventArgs e)
        {
            TextBox1.Text = DropDownList1.SelectedValue.ToString();
        }
    }
}`,
  7: `using System;

namespace Practical_1_2
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Practical 1 C ");
            Console.WriteLine("Choose an operation:");
            Console.WriteLine("1. Generate Fibonacci series");
            Console.WriteLine("2. Test for prime numbers");
            Console.Write("Enter your choice (1 or 2): ");
            int choice = Convert.ToInt32(Console.ReadLine());

            switch (choice)
            {
                case 1:
                    GenerateFibonacci();
                    break;
                case 2:
                    TestPrimeNumber();
                    break;
                default:
                    Console.WriteLine("invalid Choice");
                    break;
            }
        }

        static void GenerateFibonacci()
        {
            Console.Write("Enter the number of terms for the Fibonacci series: ");
            int terms = Convert.ToInt32(Console.ReadLine());

            int first = 0, second = 1, next;
            Console.WriteLine("\n Fibonacci Series");
            for (int i = 1; i <= terms; i++)
            {
                Console.WriteLine(first + " ");
                next = first + second;
                first = second;
                second = next;
            }
            Console.WriteLine();
        }

        static void TestPrimeNumber()
        {

            Console.Write("Enter the lower bound of the range: ");
            int lower = Convert.ToInt32(Console.ReadLine());
            Console.Write("Enter the upper bound of the range: ");
            int upper = Convert.ToInt32(Console.ReadLine());

            Console.WriteLine($"\nPrime numbers between {lower} and {upper}:");

            for (int i = lower; i <= upper; i++)
            {
                if (IsPrime(i))
                {
                    Console.Write(i + " ");
                }
            }
            Console.WriteLine();
        }
        static bool IsPrime(int number)
        {
            if (number <= 1)
                return false;
            if (number == 2)
                return true;
            for (int i = 2; i <= Math.Sqrt(number); i++)
            {
                if (number % i == 0)
                    return false;
            }
            return true;
        }
    }
}
`,
  8: `//webform1.aspx
<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebForm2.aspx.cs" Inherits="DBpracticals.WebForm2" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <asp:Button ID="Button1" runat="server" OnClick="Button1_Click" Text="Button" />
                <br>
            <asp:GridView ID="GridView1" runat="server">
            </asp:GridView>
        </div>
    </form>
</body>
</html>

//webform1.aspx.cs
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace DBpracticals
{
    public partial class WebForm2 : System.Web.UI.Page
    {
        SqlConnection con = new SqlConnection(@"Data Source=\SQLEXPRESS;Initial Catalog=student;Integrated Security=True;Encrypt=True;TrustServerCertificate=True;");
        DataSet ds = new DataSet();
        protected void Page_Load(object sender, EventArgs e){}

        protected void Button1_Click(object sender, EventArgs e)
        {
            SqlDataAdapter sda = new SqlDataAdapter("select * from student",con);
            sda.Fill(ds);
            GridView1.DataSource = ds.Tables[0];
            GridView1.DataBind();
        }
    }
}`,
  9: `<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebForm1.aspx.cs" Inherits="ExceptionHandlingPractical.WebForm1" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div>

            <asp:Label ID="Label1" runat="server" Text="Number 1 : "></asp:Label>
            <asp:TextBox ID="TextBox1" runat="server"></asp:TextBox>
            <br />
            <asp:Label ID="Label2" runat="server" Text="Number 2 : "></asp:Label>
            <asp:TextBox ID="TextBox2" runat="server"></asp:TextBox>
            <br />
            <br />
            <asp:Button ID="Button1" runat="server" Text="Button" OnClick="Button1_Click" />

            <br />
            <br />

            <asp:Label ID="Label3" runat="server" Text="Label"></asp:Label>
        </div>
    </form>
</body>
</html>


using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
namespace ExceptionHandlingPractical
{
    public partial class WebForm1 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e){}
        protected void Button1_Click(object sender, EventArgs e)
        {
            try
            {
                int a = int.Parse(TextBox1.Text);
                int b = int.Parse(TextBox2.Text);

                int c = a / b;

                int[] arr = { 1, 2, 3, 4 };
                int value = arr[5];
            }
            catch (DivideByZeroException ex) {
                Label3.Text = ex.Message;
            }
            catch(IndexOutOfRangeException ex) {
                Label3.Text = ex.Message;
            }
        }
    }
}`,
  10: `//web.sitemap
<?xml version="1.0" encoding="utf-8" ?>
<siteMap xmlns="http://schemas.microsoft.com/AspNet/SiteMap-File-1.0" >
  <siteMapNode url="Laptop.aspx" title="Laptop">
    <siteMapNode url="Mobile.aspx" title="Mobile"/>
    <siteMapNode url="Desktop.aspx" title="Desktop"/>
  </siteMapNode>
</siteMap>

//webform.aspx
<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Sitemap.aspx.cs" Inherits="Practical5.WebForm" %>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div>

            <h3>Tree view</h3>
            <asp:TreeView ID="TreeView1" runat="server" DataSourceID="SiteMapDataSource1"></asp:TreeView>

             <asp:SiteMapDataSource ID="SiteMapDataSource1" runat="server" />

             <h3>DataList view</h3>
            <asp:DataList ID="DataList1" runat="server" DataSourceID="SiteMapDataSource1">
                <ItemTemplate>
                    Description:
                    <asp:Label ID="DescriptionLabel" runat="server" Text='<%# Eval("Description") %>' />
                    <br />
                    Title:
                    <asp:Label ID="TitleLabel" runat="server" Text='<%# Eval("Title") %>' />
                    <br />
                    Url:
                    <asp:Label ID="UrlLabel" runat="server" Text='<%# Eval("Url") %>' />
                    <br />
<br />
                </ItemTemplate>
            </asp:DataList>

        </div>
    </form>
</body>
</html>

//Laptop.aspx
<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="SitemapDesktop.aspx.cs" Inherits="Practical5.SitemapDesktop" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div>

            <asp:SiteMapPath ID="SiteMapPath1" runat="server"></asp:SiteMapPath>
            <h1>This is Desktop</h1>
        </div>
    </form>
</body>
</html>

// more two webform file Desktop.aspx and Mobile.aspx same as Laptop.aspx to navigate
`,
  11: `//Site.Master
<%@ Master Language="C#" AutoEventWireup="true" CodeBehind="Site.master.cs" Inherits="Practical5.SiteMaster" %>
<!DOCTYPE html>
<html lang="en">
<head runat="server">
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title><%: Page.Title %> - My ASP.NET Application</title>
    <asp:PlaceHolder runat="server">
        <%: Scripts.Render("~/bundles/modernizr") %>
    </asp:PlaceHolder>
    <webopt:BundleReference runat="server" Path="~/Content/css" />
    <link href="~/favicon.ico" rel="shortcut icon" type="image/x-icon" />
</head> 
<body>
    <form id="form1" runat="server">
        <div style="background-color:cornflowerblue">
            <header>
                <h1>My Web Application</h1>
                <nav>
                    <ul>
                        <li><a href="page1.aspx">Page 1</a></li>
                        <li><a href="page2.aspx">Page 2</a></li>
                    </ul>
                </nav>
            </header>
        </div>
            <asp:ContentPlaceHolder ID="MainContent"
                runat="server">
            </asp:ContentPlaceHolder>
        <footer style="background-color:black;color:white">
            <p>&copy; 2024 My Web Application</p>
        </footer>
    </form>
</body>
</html>

//page1.aspx
<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="page1.aspx.cs" Inherits="Practical5.WebForm3" %>
<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">
 <h2>Diwali Festival</h2>
    <p>Diwali, also known as the Festival of Lights, is one of the most important festivals in India. It symbolizes the victory of light over darkness.</p>
</asp:Content>


//page2.aspx
<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="page2.aspx.cs" Inherits="Practical5.page2" %>
<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">
    <h2>Holi Festival</h2>
    <p>Holi, also known as the Festival of Colors, celebrates the arrival of spring. It is a time for joy, laughter, and color.</p>
</asp:Content>`,
  12: `//webform.aspx
<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebForm1.aspx.cs" Inherits="practical12.WebForm1" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <asp:ListBox ID="ListBox1" runat="server"></asp:ListBox>
        </div>
        <br>
        <asp:Button ID="Button1" runat="server" Text="Button" OnClick="Button1_Click" />
        <br>
        <asp:Label ID="Label2" runat="server" Text="Label"></asp:Label>
        <br>
        <asp:Label ID="Label1" runat="server" Text="Label"></asp:Label>
    </form>
</body>
</html>

//webform.aspx.cs
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace practical12
{
    class Furniture
    {
        public string name;
        public string manu;
        public string cost;

        public Furniture(string name, string manu, string cost)
        {
            this.name = name;
            this.manu = manu;
            this.cost = cost;
        }
    }
    public partial class WebForm1 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {

                Session["s1"] = new Furniture("chair", "chair manu", "100");
                Session["s2"] = new Furniture("table", "table manu", "1000");
                Session["s3"] = new Furniture("sofa", "sofa manu", "10000");

                ListBox1.Items.Add(((Furniture)Session["s1"]).name);
                ListBox1.Items.Add(((Furniture)Session["s2"]).name);
                ListBox1.Items.Add(((Furniture)Session["s3"]).name);
            }
        }

        protected void Button1_Click(object sender, EventArgs e)
        {
            if (ListBox1.SelectedIndex == 0)
            {
                Label1.Text = ((Furniture)Session["s1"]).manu;
                Label2.Text = ((Furniture)Session["s1"]).cost;

            }
            else if (ListBox1.SelectedIndex == 1)
            {
                Label1.Text = ((Furniture)Session["s2"]).manu;
                Label2.Text = ((Furniture)Session["s2"]).cost;
            }
            else if (ListBox1.SelectedIndex == 2)
            {
                Label1.Text = ((Furniture)Session["s3"]).manu;
                Label2.Text = ((Furniture)Session["s3"]).cost;
            }

        }
    }
}`,
  13: `1. Implement custom exception handling in a web application.(8b)

2. Build a program that stores user data (e.g., ID, Name, Contact Information) in a database and retrieves it to display in tabular form on a webpage.(6a)

3. Create a user control for the footer (e.g., displaying a message like "All rights reserved") and integrate it into a web form.(4c)

4. Show how to rotate through multiple ads using an advertisement control in a web form and demonstrate filtering ads based on specific keywords.(4b)

5. Demonstrate the concepts of boxing and unboxing by creating a simple application.(2a)

6. Design a webpage with interactive controls, where:
Changing radio button selections alters the font properties of the label text.
Selecting an option from the dropdown displays relevant information (e.g., code) in the text box.(3a)

7. Create an application that:
Generates a number sequence (e.g., Fibonacci).
Determines if a given number is prime.(1c)

8. Design a solution that retrieves records from a table using disconnected data access, displaying the results in a grid view.(6b)

9. Use basic web controls (e.g., text box, label) to demonstrate exception handling for common errors like divide by zero and index out of range.(8b)

10. Develop a webpage that uses tree and list views to present structured information, such as navigation or hierarchical data.(5a)

11. Use a master page to maintain consistent layout elements (e.g., headers, footers) across multiple content pages, with each content page displaying unique information.(5b)

12. Create a session-based system to store objects (e.g., furniture details) and display them in a list. Implement a button to retrieve and show more information about a selected item in a label.(7a)

`,
};

// Route that returns JSON data
app.get("/", (req, res) => {
  res.json(data);
});
app.get("/:pno", (req, res) => {
  res.json(data[req.params.pno]);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
